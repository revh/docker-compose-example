var mysql = require('mysql');
var express = require('express');
var app = express();

var connection = mysql.createConnection({
  host: 'db-service',
  user: 'root',
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

connection.connect();

const success = data => ({ status: "success", data });
const error = error => ({ status: "error", error });

app.get('/', (_req, res) => {
  try {
    connection.query('SELECT ID, NAME FROM products', function (err, rows) {
      if (err) throw err;

      res.json(success(rows));
    });

  } catch (e) {
    res.json(error(e));
  }
});

app.listen(80, () => {
  console.log('Example app listening on port 3000!');
});

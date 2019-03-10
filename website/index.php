<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>WebSite</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <?php 
        $json = json_decode(file_get_contents("http://products-service"));
        if ($json->status === "success"): 
    ?>
    <ul>
    <?php foreach($json->products as $row): ?>
        <li><?= $row->NAME ?></li>
    <?php endforeach ?>
    </ul>
    <?php else: ?>
        <p><?= $json->error ?></p>
    <?php endif ?>   
</body>
</html>

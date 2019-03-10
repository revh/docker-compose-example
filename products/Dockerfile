FROM node:10.15.3-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 80

CMD ["yarn", "start"]

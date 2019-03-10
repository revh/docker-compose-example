FROM node:10.15.3-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 80

## THE LIFE SAVER
#ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.5.0/wait /wait
#RUN chmod +x /wait

## Launch the wait tool and then your application
CMD ["yarn", "start"]
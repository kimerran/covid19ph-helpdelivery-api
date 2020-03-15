FROM node:12-slim

WORKDIR /app

COPY src src
COPY config config
COPY package.json package.json

RUN npm install

ENTRYPOINT [ "npm", "start" ]
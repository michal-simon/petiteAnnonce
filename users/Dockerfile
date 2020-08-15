FROM node:12.18.3


# install common utils

# CMD [ "openssl", "req -nodes -newkey rsa:2048 -keyout example.key -out example.csr -subj "/C=FR/ST==IDF/L=PARIS/O=Global Security/OU=IT Department/CN=nikah.com"]
ARG NODE_ENV=development
ARG DB_SERVER=users_db
ARG DB_NAME=users
ARG DB_USER=root
ARG DB_PASS=root
ARG DB_PORT=7200
ARG APP_PORT=3000

ENV NODE_ENV=development
ENV DB_SERVER=users_db
ENV DB_NAME=users
ENV DB_USER=root
ENV DB_PASS=root
ENV DB_PORT=7200
ENV APP_PORT=3000

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
RUN yarn
RUN yarn add node-gyp

COPY . .

RUN yarn watch
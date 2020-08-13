FROM node:12

# install common utils

WORKDIR /app
CMD [ "openssl", "req -nodes -newkey rsa:2048 -keyout example.key -out example.csr -subj "/C=FR/ST==IDF/L=PARIS/O=Global Security/OU=IT Department/CN=nikah.com"]
WORKDIR /app
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
COPY . .
RUN yarn

CMD [ "yarn", "watch" ]
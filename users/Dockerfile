FROM node:12.18.3
# # CMD [ "openssl", "req -nodes -newkey rsa:2048 -keyout example.key -out example.csr -subj "/C=FR/ST==IDF/L=PARIS/O=Global Security/OU=IT Department/CN=nikah.com"]

ENV USER=www
ENV DIRAPP=webapp

ENV NODE_ENV=development
ENV DB_SERVER=users_db
ENV DB_NAME=users
ENV DB_USER=root
ENV DB_PASS=root
ENV DB_PORT=7200
ENV APP_PORT=3000

RUN useradd --user-group --create-home --shell /bin/false $USER
ENV HOME=/home/$USER
COPY package.json package-lock.json $HOME/$DIRAPP/
RUN chown -R $USER:$USER $HOME/*
USER $USER
WORKDIR $HOME/$DIRAPP


EXPOSE 3000
RUN yarn add node-gyp

RUN yarn
COPY . .
CMD [ "yarn", "watch" ]
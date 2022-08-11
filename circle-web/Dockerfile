FROM node:16-slim

WORKDIR /app

COPY ./package.json ./yarn.lock ./
RUN yarn --fozen-lockfile

COPY ./src ./src
COPY ./index.html ./vite.config.ts ./
RUN yarn build

CMD yarn start --host

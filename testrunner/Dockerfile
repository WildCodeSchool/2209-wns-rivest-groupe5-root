FROM node:lts-alpine

RUN mkdir app
WORKDIR /app

COPY package.json ./
COPY jest.config.js ./
RUN npm install

COPY tsconfig.json ./
COPY ../back/tests/ ./tests/

CMD npm run test
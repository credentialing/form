FROM node:lts as build
RUN mkdir usr/src/app
COPY package.json usr/src/app

RUN  cd usr/src/app && npm install

COPY . usr/src/app

WORKDIR usr/src/app

ENV PORT=433
ENV NODE_ENV=production

RUN npm run build

EXPOSE ${PORT}

CMD [ "npm", "start" ]

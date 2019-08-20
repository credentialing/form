FROM node:lts as build
WORKDIR usr/src
COPY . .
RUN  npm install
RUN npm run build


FROM node:lts as prod
WORKDIR usr/src
COPY . .
RUN  npm install
RUN ls
EXPOSE 8080

CMD [ "npm", "start" ]

FROM node:11.10.0

RUN apt-get update && \
      apt-get -y install sudo

RUN useradd -m docker && echo "docker:docker" | chpasswd && adduser docker sudo

USER docker

COPY ["package.json", "/usr/src"]

WORKDIR usr/src

RUN npm install

COPY [".", "/usr/src"]

EXPOSE 3001

CMD [ "yarn", "serve" ]
CMD [ "yarn", "start-api" ]
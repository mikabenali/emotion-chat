FROM node:lts

WORKDIR /usr/src

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install --production --silent && mv node_modules ../

COPY . .

EXPOSE 4200

RUN npm install -g @angular/cli

CMD npm start

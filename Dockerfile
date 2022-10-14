FROM node:9-slim
## WORKDIR specifies the directory our
## application's code will live within
WORKDIR /app
## We copy our package.json file to our
## app directory
COPY docker/package.json /app
## We then run npm install to install
## express for our application
RUN npm install
## We then copy the rest of our application
## to the app direcoty
COPY docker/server.js /app
COPY dist /app
## We start our application by calling
## npm start.
CMD ["npm", "start"]

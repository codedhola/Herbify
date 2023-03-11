FROM node:19.7-alpine3.16

WORKDIR /app

COPY ./ ./

RUN npm install 

RUN npm run build

CMD [ "npm", "start" ]
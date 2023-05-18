FROM node:19.7-alpine3.16

EXPOSE 5001

WORKDIR /app

COPY package*.json .

RUN npm install 

COPY . .

# RUN npm run build

CMD [ "npm", "run", "dev" ]
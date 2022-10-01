FROM --platform=linux/amd64 node:12-alpine

WORKDIR /app

COPY package.json ./

RUN npm install
EXPOSE 3000
COPY . .

CMD ["npm", "start"]

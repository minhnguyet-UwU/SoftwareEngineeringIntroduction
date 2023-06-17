FROM node:18-alpine

WORKDIR /node
COPY package.json /node/
COPY package-lock.json /node/
RUN npm install

COPY . /node

EXPOSE 8080
CMD ["node", "src/index.js"]
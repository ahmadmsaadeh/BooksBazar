FROM node:20-alpine
RUN apk add --no-cache make gcc g++ python3
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm rebuild sqlite3
EXPOSE 8081
CMD ["npm", "start"]
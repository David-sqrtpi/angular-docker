FROM node:lts-alpine3.13

WORKDIR /app
COPY . .
RUN npm install -g @angular/cli
RUN npm install

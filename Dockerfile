FROM node:12.16.0

COPY dist /dist
COPY server.js /
COPY package-lock.json /
COPY package.json /

RUN npm install

EXPOSE 3000

CMD npm run express
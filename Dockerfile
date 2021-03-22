FROM node:12

WORKDIR /docker/


COPY server.js /docker
COPY package-lock.json /docker
COPY package.json /docker
COPY dist /docker
RUN npm install


EXPOSE 3000

CMD ["node", "./server.js"]
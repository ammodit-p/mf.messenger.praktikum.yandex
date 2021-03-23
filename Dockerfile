FROM node:12


COPY server.js /
COPY package-lock.json /
COPY package.json /
COPY . /
RUN npm install
RUN npm install -g sass
RUN npm run build


EXPOSE 4000

CMD ["node", "./server.js"]
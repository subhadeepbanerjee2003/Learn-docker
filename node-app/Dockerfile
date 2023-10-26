# Base image and as the applicatiion is nodejs/javascript based, we will use node image

FROM node 

COPY index.js /home/app/index.js
COPY package.json /home/app/package.json

WORKDIR /home/app/

RUN npm install

CMD ["node", "index"]
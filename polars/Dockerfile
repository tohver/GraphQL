FROM node:alpine

WORKDIR /app

COPY  package.json ./
COPY tsconfig.json ./
COPY src ./src
COPY data ./data

EXPOSE 4000

# Install dependencies, using NPM because yarn fails for 'nodejs-polars'
RUN npm install
RUN yarn build

CMD [ "npm", "start" ]

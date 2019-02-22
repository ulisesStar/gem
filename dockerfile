FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/gem
WORKDIR /usr/src/gem

# Install app dependencies
COPY package.json /usr/src/gem
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./

RUN npm install

# Bundle app source
COPY . /usr/src/gem

EXPOSE 8080

CMD [ "npm", "start" ]

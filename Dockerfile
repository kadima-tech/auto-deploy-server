# For now we use a third party version, but this should be substituted by the official
FROM node:latest

MAINTAINER Jacobus Meulen

# Install yarn
RUN npm set progress=false && \
    npm install -g --progress=false yarn

# Create a directory for the app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app
COPY .babelrc /usr/src/app
RUN yarn

# Copy app source
ADD src /usr/src/app/src
ADD bin /usr/src/app/bin

# Expose the port
EXPOSE 8080
CMD [ "node", "--harmony", "bin/www.js" ]
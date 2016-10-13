# For now we use a third party version, but this should be substituted by the official
FROM kkarczmarczyk/node-yarn

# Create a directory for the app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app
RUN yarn

# Copy app source
COPY src /usr/src/app

# Expose the port
EXPOSE 8080
CMD [ "yarn", "start" ]
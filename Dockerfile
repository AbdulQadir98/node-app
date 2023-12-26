# Use a base image with Node.js
FROM node:17-alpine

# Install app dependencies in the image
# RUN npm install

# Copy all application files to the image (creates a folder app)
COPY . /app

# Set the working directory
WORKDIR /app

# Install app dependencies in the image
RUN npm install

# Expose port 3000 (port exposed by the container)
EXPOSE 3000

# Define the startup command
# RUN command will run at build time, not RUN node app.js
# we do it after we have a running instance (container)
CMD ["node", "app.js"]

# to build image
# docker build -t <image_name> .
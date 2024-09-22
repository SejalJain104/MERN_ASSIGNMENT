# Use the official Ubuntu image as the base image
FROM ubuntu

# Update the package repository
RUN apt-get update

# Use the official Ubuntu image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy application code to the container
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY ExpressRestApi.js index.js
COPY connection.js connection.js
COPY routes/User.js ./routes/
COPY model/User.js ./model/
# Install npm dependencies
RUN npm install

# Expose port 3000 to be accessible from outside the container
EXPOSE 3000

# Define the entry point of the application
ENTRYPOINT ["node","index.js"]
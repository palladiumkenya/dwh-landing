# Use the official Node.js image as the base image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Copy the entrypoint script and make it executable
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Build the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Use entrypoint to inject env into runtime-config.js
ENTRYPOINT ["/entrypoint.sh"]
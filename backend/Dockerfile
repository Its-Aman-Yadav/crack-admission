# Use the Node.js image as the base
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire backend directory
COPY . .

# Build the Strapi app
RUN npm run build

# Expose the Strapi default port
EXPOSE 1337

# Start the Strapi app
CMD ["npm", "start"]

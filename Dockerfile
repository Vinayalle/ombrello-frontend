# Use a base Node.js image with the LTS version
FROM node:18 AS development

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies including dev dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port where Vite runs (default is 3000)
EXPOSE 5000

# Command to run the application in development mode
CMD ["npm", "run", "dev"]

# Use a base Node.js image
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application for production
RUN npm run build

# Production environment
FROM node:18-slim

# Set the working directory
WORKDIR /app

# Copy the build output from the build stage
COPY --from=build /app/build ./build

# Install serve to run the application
RUN npm install -g serve

# Expose the port where your app runs
EXPOSE 5000

# Command to run the application
CMD ["serve", "-s", "build", "-l", "5000"]

# FROM node:18-alpine

# WORKDIR /app

# # Copy package.json and package-lock.json (if present)
# COPY package*.json ./

# RUN npm install

# # Copy the rest of the application code
# COPY . .

# EXPOSE 5173

# CMD ["npm", "run", "dev"]

# Use the official Node.js image as the base image
FROM node:16-alpine as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use the official Nginx image as the base image for the production environment
# FROM nginx:alpine

# Copy the built files from the build stage to the Nginx html directory
# COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration file (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 5000
CMD [ "npm", "run", "dev" ]
# Start Nginx
# CMD ["nginx", "-g", "daemon off;"]
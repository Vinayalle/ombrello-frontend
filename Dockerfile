FROM node:18-alpine

WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

RUN npm install

# Copy the rest of the application code
COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]

# FROM node:16-alpine
# RUN mkdir -p /app
# WORKDIR /app
# COPY . .
# ENV NODE_ENV=development
# RUN npm install 
# COPY . .
# RUN npm run build
# COPY . .

# CMD [ "npm", "start" ]
# Use the official Node.js image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

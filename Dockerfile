# Use the official Node.js image as a base
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application
COPY . .

# Optional: Build step (for Next.js or other frameworks)
# Remove this if you're not using a build step
RUN npm run build

# Expose the port the app runs on (adjust if needed)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

# Use official Node.js LTS image
FROM node:16

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the project files
COPY . .

# Default command to run your game
CMD ["node", "game.js"]

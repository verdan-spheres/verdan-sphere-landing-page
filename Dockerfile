# Stage 1: Install dependencies and build the application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /usr/src/app

# Install dependencies only from package.json and for remain consistance version use ci 
COPY package*.json ./
RUN npm ci

# Copy the entire application code and build it
COPY . .
RUN npm run build

# Stage 2: Prepare the production-ready image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy only the necessary files from the builder stage
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/package.json ./
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/next.config.mjs ./next.config.mjs

# Expose the application port
EXPOSE 3000

# Start the application in production mode
CMD ["npm", "run", "start"]

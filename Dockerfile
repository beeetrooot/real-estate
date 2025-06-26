# Use Node base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy yarn config and enable corepack
COPY .yarnrc.yml ./
RUN corepack enable && corepack prepare yarn@4.9.2 --activate

# Copy package definitions
COPY package.json yarn.lock ./

# Use node_modules, not PnP
RUN yarn config set nodeLinker node-modules

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy app source code
COPY . .

# Build the app
RUN yarn build

# Expose the port
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]

# syntax=docker/dockerfile:1.4
# Create image based on the official Node image from dockerhub
FROM node:16.15.0-slim AS development

# Create app directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

# Install dependecies
RUN npm set progress=false \
    && npm config set depth 0 \
    && npm i install
#RUN npm i

# Get all the code needed to run the app
COPY . /usr/src/app

# Expose the port the app runs in
ENV CI=false
ENV PORT=3021

# Serve the app
CMD ["npm", "start"]

FROM development AS build
# Build the app
RUN npm run build

FROM development as dev-envs
RUN <<EOF
apt-get update
apt-get install -y --no-install-recommends git
EOF

RUN <<EOF
useradd -s /bin/bash -m vscode
groupadd docker
usermod -aG docker vscode
EOF
# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /
CMD [ "npm", "start" ]

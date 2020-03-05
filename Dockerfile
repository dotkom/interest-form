FROM node:12-alpine

LABEL maintainer="dotkom@online.ntnu.no"
LABEL project="rad-rif"

ENV WORKDIR=/srv/app
ENV NODE_ENV=production

WORKDIR ${WORKDIR}

# Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn

# Copy project files
COPY . .

# Build backend
RUN yarn build:backend

EXPOSE 8081

CMD ["node", "./src/server/server.js"]
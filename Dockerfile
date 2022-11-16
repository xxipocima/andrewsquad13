# STAGE 1: Build an App #
FROM node:14 AS build-source
LABEL autodelete="true"
WORKDIR /usr/src/app
COPY package.json .
RUN npm install --force
COPY . .
RUN npm run build --force
# STAGE 2: Run an App #
FROM nginx:latest
#comment line before on you local env #
#COPY letsencrypt /etc/nginx/letsencrypt

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-source /usr/src/app/build /usr/share/nginx/html
# EXPOSE 80


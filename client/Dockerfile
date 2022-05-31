# build environment
FROM node:16-alpine as build
COPY . .
RUN npm install

RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build ./dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
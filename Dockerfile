FROM node:16-alpine as builder

WORKDIR '/app'
COPY package.json .
RUN npm install

COPY . .

# Create /app/build for the apps
RUN npm run build


FROM nginx
# Use /app/build files to be exposed in nginx web
COPY --from=builder /app/build /usr/share/nginx/html

# stage 1

FROM node:lts-alpine AS deck-sorter-build
WORKDIR /app
COPY . .
RUN npm install -g npm@8.1.3
RUN npm ci && npm run build

# stage 2

FROM nginx:alpine
COPY --from=deck-sorter-build /app/dist/DeckSorterWebApp /usr/share/nginx/html
EXPOSE 80
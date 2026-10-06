FROM node:20-alpine AS builder
WORKDIR /app
COPY server.js .

FROM node:20-alpine

RUN apk upgrade --no-cache

WORKDIR /app
COPY --from=builder /app/server.js .

USER node
EXPOSE 8080

CMD ["node", "server.js"]
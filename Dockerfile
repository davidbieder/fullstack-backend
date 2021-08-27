# build environment
FROM quay.io/upslopeio/node-alpine as build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --production --silent
COPY . ./

# production environment
FROM quay.io/upslopeio/node-alpine
COPY --from=build /app/bin /app/bin
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/routes /app/routes
COPY --from=build /app/app.js /app/app.js
EXPOSE 3000
CMD ["node", "/app/bin/www"]
FROM node:lts AS runtine

WORKDIR /app

COPY . .

RUN npm install && npm run build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]
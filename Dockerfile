FROM node:20-alpine

RUN addgroup app && adduser -S -G app app
# USER app

WORKDIR /app
COPY --chown=app:app package*.json ./
RUN npm install
COPY . . 
RUN npm run build

EXPOSE 5000 

CMD ["npm", "start"]
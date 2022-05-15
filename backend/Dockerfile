FROM node:12.18.3

LABEL version="1.0"
LABEL description="This is the base docker image backend API."

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN npm install --production
COPY . .

EXPOSE 5001

CMD ["node", "index.js"]
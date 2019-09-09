FROM node
MAINTAINER Anthony
RUN mkdir average
ADD src average
WORKDIR average
RUN npm ci
ENTRYPOINT ["node","average.js"]

FROM node:18-alpine AS base
RUN npm i -g npm
RUN npm i -g @nestjs/cli

FROM base AS development 
ARG APP 
ARG NODE_ENV=development 
ENV NODE_ENV=${NODE_ENV} 
WORKDIR /usr/src/app 
COPY package.json ./ 
RUN npm install
COPY . . 
RUN npm run build ${APP} 
 
FROM base AS production 
ARG APP 
ARG NODE_ENV=production 
ENV NODE_ENV=${NODE_ENV} 
WORKDIR /usr/src/app 
COPY package.json ./ 
RUN npm install --only=production
COPY --from=development /usr/src/app/dist ./dist 
 
EXPOSE 3000
# Add an env to save ARG
ENV APP_MAIN_FILE=dist/apps/${APP}/main 
CMD node ${APP_MAIN_FILE}
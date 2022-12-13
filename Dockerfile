#  -------- Builder --------
# Use 'alpine' variant due to its reduced size
FROM node:16-alpine as builder

# Install dependencies
WORKDIR /builder-folder
COPY package.json /builder-folder/
COPY yarn.lock /builder-folder/
RUN yarn install

# Copy project
COPY . /builder-folder
RUN yarn run build

# -------- END builder --------
# Use 'alpine' variant due to its reduced size
FROM node:18-alpine

# Copy files
WORKDIR /inditex_api
COPY --from=builder /builder-folder/dist /inditex_api/dist
COPY --from=builder /builder-folder/package.json /inditex_api/


# Dependencies
ENV NODE_ENV=production
RUN yarn add module-alias --ignore-scripts

# Execute
CMD yarn run start

# Port exposing
EXPOSE 8080
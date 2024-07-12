FROM node:22.4 as builder

WORKDIR /usr/app/
ENV PORT 3000
EXPOSE 3000

COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY . .

ENV NODE_ENV=production
RUN npm run build

# checkov:skip=CKV_DOCKER_3
FROM gcr.io/distroless/nodejs22-debian12:nonroot

USER 53111

# checkov:skip=CKV_DOCKER_2
WORKDIR /usr/app/
ENV PORT 3000
ENV NODE_ENV=production

# Copy libs for prisma
COPY --from=builder --chown=53111:53111 /usr/app/.next /usr/app/.next
COPY --from=builder /usr/app/node_modules /usr/app/node_modules
COPY --from=builder /usr/app/package.json /usr/app/package.json
COPY --from=builder --chown=53111:53111 /usr/app/public /usr/app/public

CMD [ "./node_modules/next/dist/bin/next", "start" ]

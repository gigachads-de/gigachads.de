FROM node:24.2.0-bookworm AS base

FROM base AS pruner
RUN ["npm", "install", "-g", "turbo", "pnpm"]
WORKDIR /app
COPY . .
RUN ["pnpm", "turbo", "prune", "@gigachads.de/api", "@gigachads.de/web", "--docker"]

FROM base AS builder
RUN ["npm", "install", "-g", "turbo", "pnpm"]
WORKDIR /app
COPY --from=pruner /app/out/full/ /app
RUN ["pnpm", "install"]
RUN ["pnpm", "--filter", "@gigachads.de/shared", "build"]
RUN ["pnpm", "turbo", "build"]

FROM base AS installer
RUN ["npm", "install", "-g", "turbo", "pnpm"]
WORKDIR /app
COPY --from=pruner /app/out/json/ .
RUN ["pnpm", "install", "--prod"]

FROM base AS runner
RUN ["npm", "install", "-g", "pnpm"]
WORKDIR /app
RUN ["addgroup", "--system", "chad"]
RUN ["adduser", "--system", "chad"]
COPY --from=installer --chown=chad:chad /app/node_modules /app/node_modules
COPY --from=installer --chown=chad:chad /app/*.json /app
COPY --from=installer --chown=chad:chad /app/*.yaml /app
COPY --from=installer --chown=chad:chad /app/apps/api/ /app/apps/api/
COPY --from=installer --chown=chad:chad /app/apps/web /app/apps/web/
COPY --from=installer --chown=chad:chad /app/packages/shared /app/packages/shared
COPY --from=builder --chown=chad:chad /app/apps/web/dist /app/apps/web/dist
COPY --from=builder --chown=chad:chad /app/apps/api/dist /app/apps/api/dist
COPY --from=builder --chown=chad:chad /app/packages/shared/dist /app/packages/shared/dist
USER chad
CMD ["node", "/app/apps/api/dist/index.js"]

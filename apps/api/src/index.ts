import {
  env
} from "@configs/index.js";
import {
  initFastify,
  initPino
} from "@configs/index.js";

// Init the logger
export const logger = await initPino({
  enabled: env.LOG_ENABLED,
  level: env.LOG_LEVEL
});
// Init the fastify instance
export const server = await initFastify({
  host: env.FASTIFY_HOST,
  port: env.FASTIFY_PORT,
  redis: {
    host: env.REDIS_HOST,
    password: env.REDIS_PASSWORD,
    port: env.REDIS_PORT,
    family: env.REDIS_IP_FAMILY
  }
});
export const redis = server.redis;
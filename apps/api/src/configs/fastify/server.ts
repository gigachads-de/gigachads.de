import { logger } from "@index";
import { tFastifyInitOpts } from "@typesV1/index.js";
import fastify, { FastifyInstance } from "fastify";
import {
  initFastifyDecorators,
  initFastifyErrorHandler,
  initFastifyNotFoundHandler,
  initFastifyRateLimit,
  initFastifyRedis,
  initFastifyRoutes,
  initFastifyStatics,
  initFastifyZod
} from "./index.js";

export const initFastify = async (
  fastifyOpts: tFastifyInitOpts
): Promise<FastifyInstance> => {
  let server: FastifyInstance = fastify();
  server = await initFastifyDecorators(server);
  server = await initFastifyZod(server);
  server = await initFastifyRedis(server, fastifyOpts.redis);
  server = await initFastifyStatics(server);
  server = await initFastifyRateLimit(server);
  server = await initFastifyErrorHandler(server);
  server = await initFastifyNotFoundHandler(server);
  server = await initFastifyRoutes(server);
  // Listen config
  server.ready();
  server.listen({
    host: fastifyOpts.host,
    port: fastifyOpts.port
  });
  logger.info(`Fastify listening on http://${fastifyOpts.host}:${fastifyOpts.port}`);
  return server;
};

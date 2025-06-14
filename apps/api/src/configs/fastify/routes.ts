import { logger } from "@index";
import { routV1Redis, routV1Statics, routV1Teams } from "@modulesV1/index.js";
import { FastifyInstance } from "fastify";

export const initFastifyRoutes = async (
  server: FastifyInstance
): Promise<FastifyInstance> => {
  logger.debug("Trying to route the routes");
  await server.register(routV1Statics, { prefix: "/" });
  await server.register(routV1Teams, { prefix: "/api/v1/teams" });
  await server.register(routV1Redis, { prefix: "/api/v1/redis" });
  logger.debug("Successfully routed the routes");
  return server;
};
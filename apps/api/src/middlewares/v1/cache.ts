import { logger } from "@index";
import { FastifyReply, FastifyRequest, preHandlerHookHandler } from "fastify";
import { redis } from "@index";

export const cache = (): preHandlerHookHandler => {
  return async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    const { url } = request;
    const cacheData = await redis.get(url);
    if (!cacheData) {
      logger.debug(`Cache miss: ${url}`)
      return;
    } else {
      logger.trace(`Cached data: ${cacheData}`);
      logger.debug(`Cache hit: ${url}`)
      reply.send(JSON.parse(cacheData))
    };
  };
};

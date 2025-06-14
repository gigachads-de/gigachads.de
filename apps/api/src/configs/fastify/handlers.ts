import { logger } from "@index";
import { ApiError } from "@utils/errors.js";
import { buildReply } from "@utils/replys.js";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export const initFastifyErrorHandler = async (
  server: FastifyInstance
): Promise<FastifyInstance> => {
  server.setErrorHandler((
    error: Error,
    _request: FastifyRequest,
    reply: FastifyReply
  ) => {
    logger.warn(error);
    if ("statusCode" in error) {
      if (error.statusCode == 429) {
        const sanReply = buildReply(429, "Too Many Requests", error.message);
        return reply.default(sanReply);          
      }
      if (error instanceof ApiError) {
        const sanReply = buildReply(error.statusCode, error.status, error.message);
        return reply.default(sanReply);
      }
    }
    const sanReply = buildReply(400, "Bad Request", error.message);
    return reply.default(sanReply);
  });
  return server;
};

export const initFastifyNotFoundHandler = async (
  server: FastifyInstance
): Promise<FastifyInstance> => {
  server.setNotFoundHandler((
    _request: FastifyRequest,
    reply: FastifyReply
  ) => {
    const sanReply = buildReply(404, "Not Found", "Endpoint doesn't seem to exist");
    return reply.default(sanReply);
  });
  return server;
};
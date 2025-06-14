import { tGigaReply } from "@gigachads.de/shared/types";
import { FastifyInstance, FastifyReply } from "fastify";

export const initFastifyDecorators = async (
  server: FastifyInstance
): Promise<FastifyInstance> => {
  server.decorateReply("default", function (this: FastifyReply, reply: tGigaReply<any>) {
    return this.status(reply.statusCode).send(reply);
  });
  return server;
};
import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { contRedis, sDeleteRedis, servRedis } from "./index.js";

export const routV1Redis: FastifyPluginAsyncZod = async (
  server: FastifyInstance,
  _options: FastifyPluginOptions
): Promise<void> => {
  const controller = new contRedis(new servRedis());
  server.route({
    method: "DELETE",
    url: "/",
    preHandler: [],
    schema: sDeleteRedis,
    config: {
      rateLimit: {
        max: 3,
        timeWindow: "1 minute"
      }
    },
    handler: controller.flushRedis.bind(controller)
  });
};

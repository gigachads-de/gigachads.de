import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";

export const routV1Statics: FastifyPluginAsyncZod = async (
  server: FastifyInstance,
  _options: FastifyPluginOptions
): Promise<void> => {
  const paths: string[] = [
    "/",
    "/sponsors",
    "/social",
    "/contact"
  ];
  for (const path of paths) {
    server.route({
      method: "GET",
      url: path,
      handler: (_request: FastifyRequest, reply: FastifyReply) => {
        return reply.sendFile("index.html");
      }
    });
  };
};

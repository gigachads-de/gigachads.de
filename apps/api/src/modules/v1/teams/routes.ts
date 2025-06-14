import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { contTeams, servTeams, sGetTeamsId, tGetTeamsIdParams } from "./index.js";
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { cache } from "@middlewaresV1/index.js";

export const routV1Teams: FastifyPluginAsyncZod = async (
  server: FastifyInstance,
  _options: FastifyPluginOptions
): Promise<void> => {
  const controller = new contTeams(new servTeams());
  server.route<{
    Params: tGetTeamsIdParams
  }>({
    method: "GET",
    url: "/:id",
    preHandler: [cache()],
    schema: sGetTeamsId,
    handler: controller.getTeamById.bind(controller)
  });
};

import { FastifyReply, FastifyRequest } from "fastify";
import { servTeams, tGetTeamsIdParams } from "./index.js";
import { redis } from "@index";
import { buildReply } from "@utils/replys.js";

export class contTeams {
  private servTeams;
  constructor(servTeams: servTeams) {
    this.servTeams = servTeams;
  };
  public async getTeamById(
    request: FastifyRequest<{
      Params: tGetTeamsIdParams
    }>,
    reply: FastifyReply
  ): Promise<void> {
    const { url } = request;
    const { id } = request.params;
    try {
      const team = await this.servTeams.getTeamById(id);
      const sanReply = buildReply(200, "Ok", `Retrieved team ${id}`, team);
      await redis.set(url, JSON.stringify(sanReply), "EX", 300);
      return reply.default(sanReply)
    } catch (error: unknown) {
      throw error;
    };
  };
};

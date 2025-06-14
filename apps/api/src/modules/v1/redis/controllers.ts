import { buildReply } from "@utils/index.js";
import { servRedis } from "./index.js";
import { FastifyReply, FastifyRequest } from "fastify";

export class contRedis {
  private servRedis;
  constructor(servRedis: servRedis) {
    this.servRedis = servRedis;
  };
  public async flushRedis(
    _request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    try {
      await this.servRedis.flushRedis();
      const sanReply = buildReply(200, "Ok", `Flushing redis`);
      return reply.default(sanReply)
    } catch (error: unknown) {
      throw error;
    };
  };
};

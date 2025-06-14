import { sGigaReply, sGigaTeam } from "@gigachads.de/shared/types";
import { FastifySchema } from "fastify";

// DELETE /api/v1/redis/
const sDeleteRedis200Reply = sGigaReply;
export const sDeleteRedis: FastifySchema = {
  tags: ["Redis"],
  response: {
    200: sDeleteRedis200Reply
  }
};
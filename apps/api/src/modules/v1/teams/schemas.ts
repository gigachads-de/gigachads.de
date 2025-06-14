import { sGigaReply, sGigaTeam } from "@gigachads.de/shared/types";
import { FastifySchema } from "fastify";
import z from "zod";

// GET /api/v1/teams/:id
const sGetTeamsIdParams = z.object({
  id: z.coerce.number()
}); 
const sGetTeamsId200Reply = sGigaReply.extend({
  data: sGigaTeam
});
export type tGetTeamsIdParams = z.infer<typeof sGetTeamsIdParams>;
export const sGetTeamsId: FastifySchema = {
  tags: ["Teams"],
  params: sGetTeamsIdParams,
  response: {
    200: sGetTeamsId200Reply
  }
};
import { tGigaReply, tGigaTeam } from "@gigachads.de/shared/types";
import { fetchJson } from "@utils/index.js"

export const getTeamById = async (
  id: number
): Promise<tGigaTeam> => {
  const reply = await fetchJson<tGigaReply<tGigaTeam>>("GET", `/api/v1/teams/${id}`);
  if (!reply.data) {
    throw new Error("Couldn't find team")
  }
  return reply.data;
};

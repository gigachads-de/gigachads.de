import { tGigaTeam } from "@gigachads.de/shared/types";
import { tQuattReply, tQuattTeam } from "@typesV1/index.js";
import { fetchJson, NotFoundError } from "@utils/index.js";
import { randomUUID } from "crypto";

export class servTeams {
  public async getTeamById(
    id: number
  ): Promise<tGigaTeam> {
    const reply = await fetchJson<tQuattReply<tQuattTeam[]>>("GET", `/teams/byId/${id}`);
    const quattTeam = reply.object[0];
    if (!quattTeam) {
      throw new NotFoundError("This team doesn't seem to exist")
    };
    const years = quattTeam.team_years.map((year => {
      return {
        year: year.year_name,
        ranking: year.endRanking
      }
    }));
    const gigaTeam: tGigaTeam = {
      uuid: randomUUID(),
      name: quattTeam.team_name,
      years: years
    };
    return gigaTeam;
  };
};
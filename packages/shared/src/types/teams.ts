import z from "zod";

export const sGigaTeamYear = z.object({
  year: z.number(),
  ranking: z.number()
});

export const sGigaTeam = z.object({
  uuid: z.string().uuid(),
  name: z.string(),
  years: z.array(sGigaTeamYear)
})

export type tGigaTeamYear = z.infer<typeof sGigaTeamYear>;
export type tGigaTeam = z.infer<typeof sGigaTeam>;

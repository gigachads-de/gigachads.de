import z from "zod";

const sFastifyInitRedisOpts = z.object({
  host: z.string(),
  password: z.string(),
  port: z.number(),
  family: z.enum(["4", "6"]).pipe(z.coerce.number())
});

export const sFastifyInitOpts = z.object({
  host: z.string(),
  port: z.number(),
  redis: sFastifyInitRedisOpts
});

export type tFastifyInitRedisOpts = z.infer<typeof sFastifyInitRedisOpts>;
export type tFastifyInitOpts = z.infer<typeof sFastifyInitOpts>;

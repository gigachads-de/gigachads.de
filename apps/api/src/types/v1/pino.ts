import z from "zod";

export const sPinoInitOpts = z.object({
  enabled: z.boolean(),
  level: z.enum(["fatal", "error", "warn", "info", "debug", "trace"])
});

export type tPinoInitOpts= z.infer<typeof sPinoInitOpts>;

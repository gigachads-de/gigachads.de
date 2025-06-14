import z from "zod";

export const schemaEnv = z.object({
  TZ: z.string().default("Etc/UTC"),
  NODE_ENV: z.string().default("production"),
  FASTIFY_HOST: z.string().ip().default("127.0.0.1"),
  FASTIFY_PORT: z.coerce.number().default(3000),
  REDIS_HOST: z.string(),
  REDIS_PASSWORD: z.string(),
  REDIS_PORT: z.coerce.number().default(6379),
  REDIS_IP_FAMILY: z.enum(["4", "6"]).pipe(z.coerce.number().default(4)),
  LOG_ENABLED: z.coerce.boolean().default(true),
  LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace"]).default("info")
});

export const env = schemaEnv.parse(process.env);

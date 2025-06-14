import "fastify";
import { tGigaReply } from "@gigachads.de/shared/types";

declare module "fastify" {
  interface FastifyReply {
    error(error: unknown): void;
    default(tGigaReply): void;
  }
}

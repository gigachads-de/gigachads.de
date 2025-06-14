import { logger, redis } from "@index";

export class servRedis {
  public async flushRedis () {
    logger.warn("Flushing redis");
    await redis.flushall();
  };
};
import { tPinoInitOpts } from "@typesV1/pino.js";
import pino, { Logger } from "pino";

export const initPino = async (
  params: tPinoInitOpts
): Promise<Logger> => {
  const pinoConfig = {
    enabled: params.enabled,
    level: params.level,
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true
      }
    }
  };
  const logger = pino.pino(pinoConfig);
  logger.debug("Pino initialized");
  return logger;
};

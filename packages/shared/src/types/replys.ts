import z from "zod";

export const sGigaReply = z.object({
  statusCode: z.number(),
  status: z.string(),
  message: z.string(),
  data: z.any()
});

export type tGigaReply<T> = {
  statusCode: number;
  status: string;
  message: string;
  data?: T;
};

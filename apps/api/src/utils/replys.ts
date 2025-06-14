import { tGigaReply } from "@gigachads.de/shared/types";

export const buildReply = <T>(
  statusCode: number,
  status: string,
  message: string,
  data?: any
): tGigaReply<T> => {
  if (!data) {
    return {
      statusCode: statusCode,
      status: status,
      message: message
    };
  } else {
    return {
      statusCode: statusCode,
      status: status,
      message: message,
      data: data
    };
  };
};
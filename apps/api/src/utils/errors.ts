export class ApiError extends Error {
  statusCode: number;
  status: string;
  constructor(message: string) {
    super(message);
    this.statusCode = 400;
    this.status = "Bad Request";
    this.name = "ApiError"
  };
};

export class NotFoundError extends ApiError {
  constructor(message: string) {
    super(message);
    this.statusCode = 404;
    this.status = "Not Found";
    this.name = "NotFoundError"
  };
};

export class AppError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly isOperational = true,
  ) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this);
  }
}

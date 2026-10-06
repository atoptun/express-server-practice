import type { NextFunction, Request, Response } from "express";
import { AppError } from "../../types/errors.js";

const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const status = err instanceof AppError ? err.status : 500;
  const message =
    err instanceof AppError && err.isOperational
      ? err.message
      : "Internal server error";

  console.error({
    error: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    time: new Date().toISOString(),
  });
  // console.error(`[${err.constructor.name}] ${status}: ${err.message}`)

  res.status(status).json({
    error: {
      message,
      status,
    },
  });
};

export default errorMiddleware;

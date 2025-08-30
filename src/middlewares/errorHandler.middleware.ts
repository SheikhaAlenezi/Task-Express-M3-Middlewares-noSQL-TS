import { Request, Response, NextFunction } from "express";
export const errorHandlerMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.status || 500).json({
    success: false,
    message: "cant find ${req.originalUrl}",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

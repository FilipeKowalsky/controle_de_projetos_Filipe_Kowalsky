import { NextFunction, Request, Response } from "express";
import { AppError } from "./error";

const handleError = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  
  return res.status(500).json({ message: "Internal Server Error." });  
};

export { handleError };

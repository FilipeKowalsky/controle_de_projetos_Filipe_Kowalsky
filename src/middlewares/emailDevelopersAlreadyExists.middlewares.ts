import { DeveloperResult } from "./../interfaces/developers.interfaces";
import { NextFunction, Request, Response } from "express";
import { client } from "../database/database";
import { AppError } from "../errors/error";

const emailAlreadyExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = req.body;
  if (!email) {
    return next();
  }

  const query: DeveloperResult = await client.query(
    'SELECT * FROM "developers" WHERE "email" = $1',
    [email]
  );

  if (query.rowCount) throw new AppError("Email already exists", 409);

  return next();
};

export default emailAlreadyExists;
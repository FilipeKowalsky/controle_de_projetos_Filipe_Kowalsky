import { DeveloperResult } from "../interfaces/developers.interfaces";
import { NextFunction, Request, Response } from "express";
import { client } from "../database/database";
import { AppError } from "../errors/error";

const devInfoAlreadyExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  const query: DeveloperResult = await client.query(
    'SELECT * FROM "developerInfos" WHERE "developerId" = $1',
    [id]
  );

  if (query.rowCount) {
throw new AppError("Developer infos already exists.", 409);
  }

  return next();
};

export default devInfoAlreadyExists;


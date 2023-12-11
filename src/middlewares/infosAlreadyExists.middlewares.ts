import { DeveloperInfosResult } from "../interfaces/developersInfos.Interfaces";
import { NextFunction, Request, Response } from "express";
import { client } from "../database/database";
import { AppError } from "../errors/error";

const infosAlreadyExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const developerId = req.params.id;
  if (!developerId) {
    return next();
  }

  const query: DeveloperInfosResult = await client.query(
    'SELECT * FROM "developerInfos" WHERE "id" = $1',
    [developerId]
  );

  if (query.rowCount)
    throw new AppError("Developer infos already exists.", 409);

  return next();
};

export default infosAlreadyExists;
import { client } from "../database/database";
import { AppError } from "../errors/error";
import { ProjectResult } from "../interfaces/projects.interfaces";
import { Request, Response, NextFunction } from "express";

const idExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { developerId } = req.body;

  const query: ProjectResult = await client.query(
    'SELECT * FROM "developers" WHERE "id" = $1',
    [developerId]
  );

  if (!query.rowCount) {
    throw new AppError("Developer not found.", 404);
  }

  return next();
};

export default idExists;
import { DeveloperResult } from "./../interfaces/developers.interfaces";
import { NextFunction, Request, Response } from "express";
import { client } from "../database/database";
import { AppError } from "../errors/error";

const verifyIdProject = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  const query: DeveloperResult = await client.query(
    'SELECT * FROM "projects" WHERE "id" = $1',
    [id]
  );

  if (!query.rowCount) {
    throw new AppError("Project not found", 404);
  }

  return next();
};

export default verifyIdProject;
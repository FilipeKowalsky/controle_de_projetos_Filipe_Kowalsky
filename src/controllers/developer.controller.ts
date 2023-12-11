import { iDeveloper, iDeveloperInfosCreate, iDeveloperRetrieveResult } from './../interfaces/developers.interfaces';
import { Request, Response } from "express";
import developerServices from '../services/developer.services';

const createDeveloper = async (req: Request, res: Response):Promise<Response> => {
    const developer:iDeveloper = await developerServices.create(req.body)
    return res.status(201).json(developer)
}

const retrieveDeveloper = async (req: Request, res: Response):Promise<Response> => {
    const developer: iDeveloperRetrieveResult = await developerServices.retrieve(req.params.id)
    return res.status(200).json(developer)
}

const updateDeveloper = async (req: Request, res: Response):Promise<Response> => {
    const developer: iDeveloper = await developerServices.update(req.body, req.params.id)
    return res.status(200).json(developer)
}

const destroyDeveloper = async (req: Request, res: Response):Promise<Response> => {
    await developerServices.destroy(req.params.id)
    return res.status(204).json()
}

const createDeveloperInfos = async (req: Request, res: Response): Promise<Response> => {
    const payload:iDeveloperInfosCreate = { ...req.body, developerId: req.params.id}
    const developerInfos = await developerServices.createInfos(payload)
    return res.status(201).json(developerInfos)
}

export default { createDeveloper, retrieveDeveloper, updateDeveloper, destroyDeveloper, createDeveloperInfos}
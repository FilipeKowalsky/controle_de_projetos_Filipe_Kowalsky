import { iProject, iProjectRetrieveReturn } from './../interfaces/projects.interfaces';
import { Request, Response } from "express";
import projectsServices from '../services/projects.services';

const createProject = async (req: Request, res: Response): Promise<Response> => {
    const project:iProject = await projectsServices.createProject(req.body)
    return res.status(201).json(project)
}

const readProject = async (req: Request, res: Response): Promise<Response> => {
    const project:iProjectRetrieveReturn = await projectsServices.retrieveProject(req.params.id)
    return res.status(200).json(project)
}

const updateProject = async (req: Request, res: Response): Promise<Response> => {
    const project:iProject = await projectsServices.updateProject(req.body, req.params.id)
    return res.status(200).json(project)
}

export default { createProject, readProject, updateProject }
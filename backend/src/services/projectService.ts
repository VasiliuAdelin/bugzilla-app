import * as express from 'express';
import Project from '../models/project';

/*
When posting a project you need to specifify the project itself and also add the members
of the team that will work on the project
*/
const postProject = async (req: express.Request, res: express.Response) => {
  const project = new Project(req.body);
  project.users; //TODO add users + update doc la JSON ul pt endpointul asta
  project.save();
  res.send(project);
};

const getProjects = async (req: express.Request, res: express.Response) => {
  const projects = await Project.find();
  res.send(projects);
};

export { getProjects, postProject };

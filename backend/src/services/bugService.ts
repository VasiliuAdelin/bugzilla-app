import * as express from 'express';
import Bug from '../models/bug';
import Project from '../models/project';

//Find bugs for given project ID
const getBugs = async (req: express.Request, res: express.Response) => {
  try {
    var project = await Project.findById(req.params.projectId); //Find the project
    var bugs = await Bug.find({ _id: { $in: project.bugs } }); //Find every bug in the given IDs array
    res.send(bugs);
  } catch (error) {
    console.log(error);
    res.send(500);
  }
};

//Post a bug for given project ID
const postBug = async (req: express.Request, res: express.Response) => {
  try {
    const bug = new Bug(req.body); //create the bug
    const project = await Project.findById(req.params.projectId); //Add bugID to the project
    project.bugs.push(bug.id);
    project.save();
    bug.save();
    res.send(bug);
  } catch (error) {
    console.log(error);
    res.sendStatus(500).send(error);
  }
};

//Get a bug by its ID
const getBug = async (req: express.Request, res: express.Response) => {
  try {
    const bug = await Bug.findById(req.params.bugId);
    res.send(bug);
  } catch (error) {
    console.log(error);
    res.sendStatus(500).send(error);
  }
};
export { getBugs, postBug, getBug };

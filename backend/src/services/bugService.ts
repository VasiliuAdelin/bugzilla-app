import * as express from 'express'
import Bug from "../models/bug";

const getBugs = async (req: express.Request, res:express.Response) => {
    const bugs= await Bug.find();
    res.send(bugs);
}

const postBug = async (req: express.Request, res:express.Response) => {
    const bug= new Bug(req.body);
    bug.save();
    res.send(bug);
}

export {getBugs,postBug}
import express from 'express';
import connectToDB from './config/db';
import * as bodyParser from 'body-parser';
import bugsRouter from './routes/bugsRoutes';
import projectsRouter from './routes/projectsRoutes';

connectToDB();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', bugsRouter, projectsRouter);

export default app;

import express from 'express';
import connectToDB from './config/db';
import {getBugs,postBug} from './services/bugService'
import * as bodyParser from 'body-parser';
import router from './routes/bugsRoutes';


connectToDB();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',router);

export default app;
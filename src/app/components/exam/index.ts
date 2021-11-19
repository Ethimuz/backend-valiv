import express, { Express } from "express";
import router from "./exam.network"

const exam: Express = express();
exam.use('/exam', router);

export default exam;

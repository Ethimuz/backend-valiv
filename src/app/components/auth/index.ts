import express, { Express } from "express";
import router from "./auth.network"


const auth: Express = express();
auth.use('/auth', router);

export default auth;

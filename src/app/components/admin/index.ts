import express, { Express } from "express";
import router from "./admin.network"


const admin: Express = express();
admin.use('/admin', router);

export default admin;

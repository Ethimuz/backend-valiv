import { Express } from "express";
import admin from "./admin";
import auth from "./auth";
import exam from "./exam";
import user from "./user";


const components: Express[] = [
  exam,
  auth,
  admin,
  user


];

export default components;

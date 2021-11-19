import express, { Request, Response, Router } from "express";
import { User } from "../../models/user.model";
import response from "../../modules/reponse.module";
import controller from "./auth.controller";
import { Admin } from "../../models/admin.model";
import { Auth } from "../../models/auth.model";


const router: Router = express.Router();

router.post('/user/register', async (req: Request, res: Response) => {
  const auth: Auth & User = req.body;
  console.log(auth);
  try {
    const result: Auth = await controller.userSignIn(auth);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 400);
  }
});

router.post('/admin/signin', async (req: Request, res: Response) => {
  const auth: Auth & Admin = req.body;
  
  try {
    const result: Auth = await controller.adminSignIn(auth);
    response.success(req, res, result, 201);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.post('/login', async (req: Request, res: Response) => {
  const auth: Auth = req.body;

  try {
    const result: string | null = await controller.login(auth);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 400);
  }
});



export default router;

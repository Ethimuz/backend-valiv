import { UserArn } from "aws-sdk/clients/codestar";
import express, { Request, Response, Router } from "express";
import { Auth } from "../../models/auth.model";
import { User } from "../../models/user.model";
import response from "../../modules/reponse.module";
import controller from "./user.controller";


const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
  try {
    const result: Array<User> = await controller.getUsers();
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.get('/unvalidated', async (req: Request, res: Response) => {
  try {
    const result: Array<User> = await controller.getUnvalidatedUsers();
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  const id: string = req.params.id;

  try {
    const result: any | null = await controller.getUser(id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  const user: any = req.body;
  const id: string = req.params['id'];

  try {
    const result: User | null = await controller.updateUser(id, user);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.patch('/:id/password', async (req: Request, res: Response) => {
  const password: { password: string } = req.body;
  const id: string = req.params['id'];

  try {
    await controller.changePassword(id, password.password);
    response.success(req, res, 'Password has been updated', 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.patch('/:id/email', async (req: Request, res: Response) => {
  const email: { email: string } = req.body;
  const id: string = req.params['id'];

  try {
    await controller.changeEmail(id, email.email);
    response.success(req, res, 'Password has been updated', 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  const id: string = req.params['id'];

  try {
    const result: User | null = await controller.deleteUser(id);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.post('/', async (req: Request, res: Response) => {
  const user: User = req.body;

  try {
    const result: User | null = await controller.addUser(user);
    console.log(user);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

export default router;

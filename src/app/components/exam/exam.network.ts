import express, { Request, Response, Router } from "express";
import { Exam } from "../../models/exam.model";
import response from "../../modules/reponse.module";
import controller from "./exam.controller";


const router: Router = express.Router();

router.get('/all/:id', async (req: Request, res: Response) => {
  const id: string = req.params['id'];
  try {
    const result: Exam[] = await controller.getExams(id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  const id: string = req.params['id'];

  try {
    const result: Exam | null = await controller.getExam(id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.post('/', async (req: Request, res: Response) => {
  const exam: Exam = req.body;
  
  try {
    const result: Exam = await controller.addExam(exam);
    response.success(req, res, result, 201);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  const exam: Partial<Exam> = req.body;
  const id: string = req.params['id'];

  try {
    const result: Exam | null = await controller.updateExam(id, exam);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  const id: string = req.params['id'];

  try {
    const result: Exam | null = await controller.deleteExam(id);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

export default router;
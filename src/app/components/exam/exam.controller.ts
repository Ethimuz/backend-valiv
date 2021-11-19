import { Exam } from "../../models/exam.model";
import repository from "./exam.repository";


function getExams(id: string): Promise<Exam[]>{
  return repository.getExams(id);
}

function getExam(id: string): Promise<Exam | null>{
  return repository.getExam(id);
}

function addExam(exam: Exam): Promise<Exam>{
  return repository.addExam(exam);
}

function updateExam(id: string, exam: Partial<Exam>): Promise<Exam | null>{
  return repository.updateExam(id, exam);
}

function deleteExam(id: string): Promise<Exam | null>{
  return repository.deleteExam(id);
}

export default { addExam, getExams, getExam, updateExam, deleteExam };

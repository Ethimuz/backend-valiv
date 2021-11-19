import { Exam } from '../../models/exam.model';
import model from './exam.schema';


async function getExams(id: string): Promise<Exam[]>{
  return model.find({ idUser: id });
}

async function getExam(id: string): Promise<Exam | null>{
  return model.findOne({ _id: id });
}

async function addExam(exam: Exam): Promise<Exam>{
  return model.create<Exam>(exam);
}

async function updateExam(id: string, exam: Partial<Exam>): Promise<Exam | null>{
  return model.findOneAndUpdate({ _id: id }, exam);
}

async function deleteExam(id: string): Promise<Exam | null>{
  return model.findOneAndRemove({_id: id});
}

export default { getExams, getExam, addExam, updateExam, deleteExam };

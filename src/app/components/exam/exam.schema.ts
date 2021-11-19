import { Schema, model, Document } from "mongoose";
import { Exam } from "../../models/exam.model";


const definition: Partial<Record<keyof Exam, any>> = {
  patientName: { type: String, required: true, lowercase: true },
  patientLastName: { type: String, required: true, lowercase: true},
  age: { type: Number, required: true, min: 0, max: 130 },
  phone: { type: Number, required: true, length: 8 },
  rut: { type: String, required: true, lowercase: true },  
  prediction: { type: String, required: true, lowercase: true },
  image: { type: String, required: true },
  idUser: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  updatedAt: { type: Date },
  createdAt: { type: Date }
};

const schema: Schema<Exam> = new Schema(definition, { timestamps: true });

export default model<Exam & Document>('Exam', schema, 'exam');

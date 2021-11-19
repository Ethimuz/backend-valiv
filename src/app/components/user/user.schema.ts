import { Schema, model, Document } from "mongoose";
import { User } from "../../models/user.model";

const definition: Partial<Record<keyof User, any>> = {
  name: { type: String, required: true, lowercase: true },
  lastname: { type: String, required: true, lowercase: true },
  speciality: { type: String, required: true, enum: ['Tecnologia Medica','Medicina General'] },
  institution: { type: String, required: true, lowercase: true },
  phone: { type: Number, required: true, unique: true },
  verified: { type: Boolean, default: 'false' }
};

const schema: Schema<User> = new Schema(definition, { timestamps: true });

export default model<User & Document>('User', schema, 'user');
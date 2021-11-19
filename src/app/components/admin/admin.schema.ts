import { Schema, model, Document } from "mongoose";
import { Admin } from "../../models/admin.model";


const definition: Partial<Record<keyof Admin, any>> = {
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  rol: { type: String, default: 'administrator' }
};

const schema: Schema<Admin> = new Schema(definition, { timestamps: true });

export default model<Admin & Document>('Admin', schema, 'admin');

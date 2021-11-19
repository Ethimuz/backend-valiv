import { Schema, model, Document, Types } from "mongoose";
import { Auth } from "../../models/auth.model";


const definition: Partial<Record<keyof Auth, any>> = {
  email: { type: String, required: true, unique: true },
  authenticated: { type: Types.ObjectId, refPath: 'entity' },
  password: { type: String, required: true },
  token: { type: String }
};

const schema: Schema<Auth> = new Schema<Auth>({
  ...definition, 
  entity: { type: String, required: true, enum: ['Admin', 'User']},
}, { timestamps: true });

export default model<Auth & Document>('Auth', schema, 'auth');

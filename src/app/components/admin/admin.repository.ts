import { Admin } from "../../models/admin.model";
import model from './admin.schema';


async function getAdmins(): Promise<Admin[]>{
  return model.find();
}

async function getAdmin(id: string): Promise<Admin[]>{
  return model.find({_id: id});
}

async function addAdmin(admin: Admin): Promise<Admin>{
  return model.create<Admin>(admin);
}

async function updateAdmin(id: string, admin: Partial<Admin>): Promise<Admin | null>{
  return model.findOneAndUpdate({ _id: id }, admin);
}

export default { getAdmins, getAdmin, addAdmin, updateAdmin };

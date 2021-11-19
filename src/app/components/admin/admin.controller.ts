import { Admin } from "../../models/admin.model";
import repository from './admin.repository';
import authController from '../auth/auth.controller';


function getAdmins(): Promise<Admin[]>{
  return repository.getAdmins();
}

function getAdmin(adminId: string): Promise<Admin[]>{
  return repository.getAdmin(adminId);
}

function addAdmin(admin: Admin): Promise<Admin> {
  return repository.addAdmin(admin);
}

function updateAdmin(id: string, admin: Partial<Admin>): Promise<Admin | null>{
  return repository.updateAdmin(id, admin);
}

async function changePassword(id: string, newPassword: string){
  return authController.changePassword(id, newPassword);
}

async function changeEmail(id: string, email: string){
  return authController.updateEmail(id, email);
}

export default { getAdmins, getAdmin, addAdmin, updateAdmin, changeEmail, changePassword };

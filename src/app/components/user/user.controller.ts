import { User } from "../../models/user.model";
import repository from './user.repository';
import authController from '../auth/auth.controller';

function getUsers(): Promise<User[]>{
  return repository.getUsers();
}

function getUnvalidatedUsers(): Promise<User[]> {
  return repository.getUnvalidatedUsers();
}

function getUser(id: string){
  return repository.getUser(id);
}



function addUser(user: User){
  return repository.addUser(user);
}

async function updateUser(id: string, user: any){
  return repository.updateUser(id, user);
}

async function changePassword(id: string, newPassword: string){
  return authController.changePassword(id, newPassword);
}

async function changeEmail(id: string, email: string){
  return authController.updateEmail(id, email);
}


async function deleteUser(id: string){
  await authController.deleteAuth(id); 
  return repository.deleteUser(id);
}

export default { getUsers, getUser, getUnvalidatedUsers, addUser, updateUser, changeEmail, changePassword, deleteUser };

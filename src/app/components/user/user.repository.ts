import { User } from "../../models/user.model";
import model from './user.schema';

async function getUsers(): Promise<User[]> {
  return model.find();
}

async function getUnvalidatedUsers(): Promise<User[]> {
  return model.find({verified: false});
}


async function getUser(id: string): Promise<User | null> {
  return model.findOne({_id: id});
}

function addUser(user: User){
  return model.create(user);
}

async function updateUser(id: string, user: Partial<User>): Promise<User | null>{
  return model.findOneAndUpdate({ _id: id }, user);
}



async function deleteUser(id: string){
  return model.findOneAndRemove({ _id: id });
}

export default { getUsers, getUser, getUnvalidatedUsers, addUser, updateUser, deleteUser };

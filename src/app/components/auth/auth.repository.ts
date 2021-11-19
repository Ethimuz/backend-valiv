import { Auth } from "../../models/auth.model";
import model from "./auth.schema";

async function addAuth(auth: Auth): Promise<Auth> {
  return model.create(auth);
}

async function getAuthByEmail(email: string): Promise<Auth | null>{
  return model.findOne({ email: email })
    .populate('authenticated')
}

async function getAuthByAuthenticated(authenticated: string): Promise<Auth | null>{
  return model.findOne({ authenticated });
}

async function updateEmail(id: string, email: string): Promise<Auth | null>{
  return model.findOneAndUpdate({ authenticated: id }, { email: email });
}

async function changePassword(id: string, newPassword: string){
  return model.findOneAndUpdate({ authenticated: id }, { password: newPassword });
}

async function deleteAuth(id: string){
  return model.findOneAndRemove({ authenticated: id });
}

export default { addAuth, getAuthByEmail, getAuthByAuthenticated, updateEmail, changePassword, deleteAuth };

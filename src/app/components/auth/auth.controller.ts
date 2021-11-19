import repository from './auth.repository';
import authModule from "../../modules/auth.module";
import { Auth } from '../../models/auth.model';
import { User } from '../../models/user.model';
import { Admin } from '../../models/admin.model';

import userController from '../user/user.controller';
import adminController from '../admin/admin.controller';
import { verify } from 'jsonwebtoken';


async function userSignIn(auth: Auth & User): Promise<Auth>{
  try {
    auth.entity = 'User';
    let newUser: User = {
      name: auth.name,
      lastname: auth.lastname,
      institution: auth.institution,
      phone: auth.phone,
      speciality: auth.speciality
    };
    newUser = await userController.addUser(newUser);
    if(newUser._id && auth.password){
      auth.authenticated = newUser?._id;
      auth.password = await authModule.encrypt(auth.password);
      return repository.addAuth(auth as Auth);
    }
  }
  catch(error){
    return Promise.reject();
  }
  return Promise.reject();
}

async function adminSignIn(auth: Auth & Admin): Promise<Auth>{
  
  try {
    auth.entity = 'User';
    let newAdmin: Admin = {
      name: auth.name,
      lastname: auth.lastname,
      rol: 'administrator',
      verified: true
    } 
    newAdmin = await adminController.addAdmin(newAdmin);
    
    if(newAdmin._id && auth.password){
      auth.authenticated = newAdmin?._id;
      auth.password = await authModule.encrypt(auth.password);
      return repository.addAuth(auth as Auth);
    } 
  } 
  catch(error){
    return Promise.reject();
  }
  return Promise.reject();
}

async function getAuthByEmail(auth: Auth): Promise<Auth | null>{
  return repository.getAuthByEmail(auth.email);
}

async function getAuthByAuthenticated(authenticated: string): Promise<Auth | null> {
  return repository.getAuthByAuthenticated(authenticated);
}

async function updateEmail(id: string, email: string): Promise<Auth | null>{
  return repository.updateEmail(id, email);
}

async function changePassword(id: string, newPassword: string){
  newPassword = await authModule.encrypt(newPassword);
  return repository.changePassword(id, newPassword);
}

async function deleteAuth(id: string){
  return repository.deleteAuth(id);
}

async function login(auth: Auth): Promise<string | null>{
  if(auth.email && auth.password){
    
    try {
      const authFound = await getAuthByEmail(auth);
  
      if(authFound && authFound.password){
        if(!(await authModule.decryptAndCompare(auth.password, authFound.password))){
          return Promise.reject();
        }
    
        const { email, entity, authenticated, verified}: any = authFound;
        
        authFound.password = undefined;
        authFound.token = authModule.sign({ 
          email: email, 
          entity: entity, 
          authenticated: authenticated._id,
          verified: verified
        });

        console.log(authModule.verify(authFound.token))
        return authFound.token;
      }
    }
    catch (error) {
      return Promise.reject();
    }
  }

  return Promise.reject();
}

export default { userSignIn, adminSignIn, login, getAuthByEmail, getAuthByAuthenticated, updateEmail, changePassword, deleteAuth };

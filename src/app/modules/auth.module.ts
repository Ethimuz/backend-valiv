import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

function sign(payload: any){
  return jwt.sign(payload, `${process.env['SECRET_KEY']}`);
}

function verify(token: string){
  return jwt.verify(token, `${process.env['SECRET_KEY']}`);
}

function encrypt(data: string){
  return bcrypt.hash(data, 5);
}

function decryptAndCompare(data: string, encrypted: string){
  return bcrypt.compare(data, encrypted);
}

export default { sign, verify, encrypt, decryptAndCompare };

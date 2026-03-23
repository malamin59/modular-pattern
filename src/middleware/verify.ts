import { NextFunction, Request, Response } from "express";

 const verify =(req: Request , res: Response , next : NextFunction) =>{
  const id = true
  if(!id) {
     throw new Error("NOT ALLOWED ")
  }
  next()
  return 
 }

 export default verify
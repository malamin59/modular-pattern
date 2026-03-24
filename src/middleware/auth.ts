import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken'
import { secret } from "../modules/auth/auth.service";
import { pool } from "../database/bt";

  const auth = ( ... role :  string[]) =>{
console.log("user role is ---->",role)
  return async  (req: Request , res: Response , next : NextFunction) => {
      const token = req.headers.authorization
       if(!token) {
        throw new Error ("you are not authorize")
       }
       const decoded = jwt.verify(token, secret) as JwtPayload
       console.log("line number of 14 in auth TS ----->>",decoded)
       const user = await pool.query(`
        SELECT * FROM users where email=$1
        ` , [decoded.email])

  if(user.rows.length === 0)    {
    throw new Error("email not found ") 
    }    
      next()
req.user  = decoded
  }
  }

export default auth
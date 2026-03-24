import { Request, Response } from "express";
import { userServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
   const result = await userServices.createUserIntoDB(req.body)
    return  res.status(200).json({
        success: true,
        message : "user created",
        data : result.rows[0]
    }) 
  } catch (error : any) {
   return  res.status(500).json({
        success:  false, 
        message: error.message
    })
  }
}


const getAllUser = async (req: Request, res: Response) => {
  try {
   const result = await userServices.getAllUserIntoDB()
    return  res.status(200).json({
        success: true,
        message : "user created",
        data : result.rows
    }) 
  } catch (error : any) {
   return  res.status(500).json({
        success:  false, 
        message: error.message
    })
  }
}
/* GET A SINGLE USER */
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const email = req.user!.email
   const result = await userServices.getSingleUserIntoDB(email)
    return  res.status(200).json({
        success: true,
        message : "user created",
        data : result.rows
    }) 
  } catch (error : any) {
   return  res.status(500).json({
        success:  false, 
        message: error.message
    })
  }
}


// export here 
export const userController = {
    createUser, 
    getAllUser,
    getSingleUser
}
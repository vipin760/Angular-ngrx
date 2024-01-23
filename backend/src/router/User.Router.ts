import { Router,Request,Response } from "express";
import asyncHandler from "express-async-handler";
import { UserModel } from "../model/User.Model";
import { IUser, IUser_Res} from "../share/interface/User.Interface";
const router = Router()

////////////////////////////////////////////////////////////////////////////////////////
router.post("/create",asyncHandler( async(req:Request,res:Response)=>{
    try {
        const {name,email,phone,password} = req.body
        const userExist = await UserModel.findOne({email:email})
        if(!userExist){
            const obj:IUser = {
                name,email,phone,password
            }
            const userSave = await UserModel.create(obj)
            if(userSave){
                res.status(200).send({data:'',message:"data saved successfully"})
            }
        }else{
            res.status(401).send({data:'',message:"email already exist"})
        }
              
    } catch (error) {
        res.status(500).send({data:"",message:"internal server down"})
    }
}))
////////////////////////////////////////////////////////////////////////////////////////
router.get("/get",asyncHandler (async(_req:Request,res:Response)=>{
    try {
        const userData:IUser_Res[] = await UserModel.find()  
        if(userData){
            res.status(200).send({data:userData,message:"data fetch successfully"})
        }else{
            res.status(401).send({data:"",message:"data cannot fetch"})
        }
    } catch (error) {
        res.status(500).send({data:"",message:"internal server down.."})
    }
}))
////////////////////////////////////////////////////////////////////////////////////////



export default router
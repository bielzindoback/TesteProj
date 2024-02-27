import { Request,Response } from "express";
import { CreateUserService } from "../../services/Users/CreateUserService";

class CreateUserController{
    async handle(req:Request,res:Response){
          const {name,email,password} = req.body;

          const crtUserService = new CreateUserService();
          
          const user = await crtUserService.execute({name,email,password})

          return res.json(user)
    }
}

export {CreateUserController}
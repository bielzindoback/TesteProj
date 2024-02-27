import { Request,Response} from "express";
import { ListByUserService } from "../../services/Publications/ListByUserService";

class ListByUserController{
   async handle(req:Request,res:Response){
    const username = req.query.username as string

    const listpubliService = new ListByUserService()

   try{
    const listbyuser = await listpubliService.execute({username})

    return res.json(listbyuser)

   }catch(err){
     return res.json({error: err.message})
   }
   
   }
}

export {ListByUserController}
import { Request,Response } from "express";
import { CreatePublicationService } from "../../services/Publications/CreatePublicationService";

class CreatePublicationController{
    async handle(req:Request,res:Response){
        const {content,user_id} = req.body;

        const createpubliService = new CreatePublicationService();

        const publication = await createpubliService.execute({content,user_id})

        return res.json(publication)
    }
}

export {CreatePublicationController}
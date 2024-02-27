import { Request,Response } from "express";
import { ListPublicationsService } from "../../services/Publications/ListPublicationsService";

class ListPublicationsController{
    async handle(req:Request,res:Response){
        
        const listPublicationsService = new ListPublicationsService();

        const publications = await listPublicationsService.execute();

        return res.json(publications)
    }
}
export {ListPublicationsController}
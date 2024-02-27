import { Response,Request } from "express";
import { DeletePublicationByIdService } from "../../services/Publications/DeletePublicationByIdService";

class DeletePublicationByIdController{
    async handle(req:Request,res:Response){
        const publication_id = req.query.publication_id as string;

        const deleteService = new DeletePublicationByIdService();

        const deletePubli = await deleteService.execute({publication_id})

        return res.json(deletePubli);
    }
}

export {DeletePublicationByIdController}
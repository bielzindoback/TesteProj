import prismaClient from "../../prisma";


type DeleteRequest={
    publication_id:string
}


class DeletePublicationByIdService{
    async execute({publication_id}:DeleteRequest){
         
         const DeletePubli = await prismaClient.publication.delete({
            where:{
                id:publication_id
            }
         })

         return DeletePubli;
    }
}

export {DeletePublicationByIdService}
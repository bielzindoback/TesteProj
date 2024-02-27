import prismaClient from "../../prisma";

class ListPublicationsService{
    async execute(){
       const publications = await prismaClient.publication.findMany({
        include:{
            user:true
        },orderBy:{
            created_at:'desc'
        }
       })

       return publications;
    
}
}

export  {ListPublicationsService}
import prismaClient from "../../prisma";


type CreatePublicationRequest={
    content:string;
    user_id:string
}

class CreatePublicationService{
    async execute({content,user_id}:CreatePublicationRequest){

        const publication = await prismaClient.publication.create({
            data:{
                content:content,
                user_id:user_id 
            },
            include:{
                user:true
            }
        })
        
        return publication;
    }
}
export{ CreatePublicationService}
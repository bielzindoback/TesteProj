import prismaClient from "../../prisma";

type ListByUserRequest={
    username: string
}


class ListByUserService{
    async execute({username}:ListByUserRequest){


        const user = await prismaClient.user.findFirst({
            where:{
                name:username
            }
        })

        if(!user){
            throw new Error("O usuário não existe!")
        }
        
        const publications = await prismaClient.publication.findMany({
            where:{
                user_id:user.id
            }
        })

        return publications;
    }
}

export {ListByUserService}
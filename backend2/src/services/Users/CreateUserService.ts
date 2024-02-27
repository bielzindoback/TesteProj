import { hash } from "bcryptjs";
import  prismaClient  from "../../prisma";

type  CreateUserRequest ={
    name: string;
    email: string;
    password: string
}



class CreateUserService{

  async execute({name,email,password}:CreateUserRequest){

    if(!email){
        throw new Error('Preencha todos os dados')
    }
    
    const userExists = await prismaClient.user.findFirst({
        where:{
            email:email
        }
    })

    if(userExists){
        throw new Error("Este email ja está cadastrado!")
    }

    const passwordHash = await hash(password,8)

    const user = await prismaClient.user.create({
        data:{
            name:name,
            email:email,
            password:passwordHash
        },
        select:{
            id:true,
            name:true,
            email:true 
        }
    })

    return user;


}
}

export {CreateUserService}
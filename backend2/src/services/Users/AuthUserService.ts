import { compare } from "bcryptjs";
import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken";

type AuthUserRequest ={
    email:string;
    password:string
}
class AuthUserService{
    async execute({email,password}: AuthUserRequest){

        const user = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        })

        if(!user){
            throw new Error("Email/Senha incorretos!")
        }
        
        const passwordMatch = compare(password,user.password)

       if(!passwordMatch){
        throw new Error('Senha incorreta!')
       }

       const token = sign(
        {
           name:user.name,
           email:user.email
        },
        process.env.JWT_SECRET,
        {
            subject:user.id,
            expiresIn: '30d'
        }
      )

      return{
        id:user.id,
        name:user.name,
        email:user.email,
        token:token
      }
    }
}

export {AuthUserService}
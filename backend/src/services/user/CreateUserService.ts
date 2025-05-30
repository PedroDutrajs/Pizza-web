import prismaClient from "../../prisma";
import { hash } from "bcryptjs";
interface UserRequest{
    name: string;
    email: string;
    password: string
}
class CreateUserService {
    async execute({name, email, password}: UserRequest){
        //verificar se ele enviou email 
        if(!email){
            throw new Error('Email incorrect')
        }
        //verificar se esse email ja esta cadastrado
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })
        if(userAlreadyExists){
            throw new Error('User already exists')
        }
        //criptografar a senha
        const passwordHash = await hash(password, 8)



        //salvar o user no banco de dados
        const user = await prismaClient.user.create({
            data:{
                name,
                email,
                password: passwordHash
            },
            select:{
                id: true,
                name: true,
                email: true
            }
        })
        
        return user
    }
}

export { CreateUserService }
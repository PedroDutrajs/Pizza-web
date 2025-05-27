import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"

interface Payload{
    sub: string, //id do usuario autenticado no token JWT

}
export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    // 1 - receber o token
    const authToken = req.headers.authorization
    if(!authToken) {//se nao receber token retorna 401 nao autorizado
        return res.status(401).end()
    }
    const [, token] = authToken.split(' ') // 2- separar o token em duas partes, o primeiro eh o Bearer e o segundo eh o token
    
    //3 - validar esse token
    try{
        const {sub} = verify(token, process.env.JWT_SECRET) as Payload

        //4 - recuperar o id do token e colocar dentro de uma variavel user_id dentro do request
        req.user_id = sub
        console.log(sub)
        return next()
    }
    catch(err){
        return res.status(401).end()
    }
    
}
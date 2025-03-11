import { NextFunction, Request, Response } from "express";
import { authManager } from "../managers/auth.manager";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if(req.originalUrl.endsWith("/login")){
        return next();
    }
    
    try
    {
        const token = req.headers.authorization?.split("Bearer ")[1];

        if(token!=undefined&&token!=''){
            const valid = authManager.validateJwt(token ?? '') 
            if(valid==true){
                return next(); 
            }  
        } 
    }
    catch(e)
    {

    }
    
}

export default authMiddleware; 
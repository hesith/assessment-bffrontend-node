import { NextFunction, Request, Response } from "express";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

    if(req.originalUrl.endsWith("/login")){
        return next();
    }
    
    const token = req.headers.authorization?.split("Bearer ")[1];

}

export default authMiddleware; 
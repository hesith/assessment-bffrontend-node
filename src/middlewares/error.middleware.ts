import { NextFunction, Request, Response } from "express";

const errorMiddleware = (err:Error, req: Request, res: Response, next: NextFunction) => {

    res.status(500).json({
            success: false,
            msg: err.message,
            data: null
        }) 
    next();
}

export default errorMiddleware; 
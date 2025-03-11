import { Response } from "express";
import { ApiResponse } from "../types/interfaces/api-response.interface";

export const handleSuccess = (res: Response, data: ApiResponse<any>) => {
    res.status(201).json(data);
}

export const handleError = (res: Response, code: number) => {
    const data:ApiResponse<any> = {success: false, msg: code.toString(), data: null}; 
    res.status(code).json(data);
}
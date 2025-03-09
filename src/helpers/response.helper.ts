import { Response } from "express";
import { ApiResponse } from "../types/interfaces/api-response.interface";

export const handleSuccess = (res: Response, data: ApiResponse<any>) => {
    res.status(201).json(data);
}

export const handleError = (res: Response, code: number) => {
    res.status(code);
}
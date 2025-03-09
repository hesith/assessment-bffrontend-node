import { Request, Response } from "express";
import { LoginDto } from "../types/interfaces/requests/authentication/login-dto";
import { authManager } from "../managers/auth.manager";
import { handleError, handleSuccess } from "../helpers/response.helper";

class AuthController{
    public login = async (req:Request, res: Response): Promise<void> => {
        try
        {
            const requestBody: LoginDto = req.body;
            const response = await authManager.login(requestBody);
            handleSuccess(res, response);
        }
        catch
        {
            handleError(res, 401)
        }
        
    }
}

export const authController = new AuthController()
import { Request, Response } from "express";
import { handleError, handleSuccess } from "../helpers/response.helper";
import { dataManager } from "../managers/data.manager";

class DashboardController{
    public getDashboardData = async (req:Request, res: Response): Promise<void> => {
        try
        {
            const response = await dataManager.getDashboardData();
            handleSuccess(res, response);
        }
        catch
        {
            handleError(res, 401)
        }
        
    }
}

export const dashboardController = new DashboardController()
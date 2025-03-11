import { Request, Response } from "express";
import { handleError, handleSuccess } from "../helpers/response.helper";
import { dataManager } from "../managers/data.manager";
import { Pagination } from "../types/interfaces/requests/pagination/pagination-dto";

class DataTableController{
    public getTableData = async (req:Request, res: Response): Promise<void> => {
        try
        {
            const requestBody: Pagination = req.body;
            const response = await dataManager.getTableData(requestBody);
            handleSuccess(res, response);
        }
        catch
        {
            handleError(res, 401)
        }
        
    }
}

export const dataTableController = new DataTableController()
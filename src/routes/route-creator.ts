import { NextFunction, Request, Response, Router } from "express";
import { HttpMethod } from "../types/enums/http.enum";
import { IRoute } from "../types/interfaces/route.interface";
import authMiddleware from "../middlewares/auth.middleware";
import globalAppConfig from "../config/global-app-config";
import path from "path";

const createRouter = (serviceName: string, routes: IRoute[]) => {
    const router = Router();
    const controllerBasePath = globalAppConfig.controllerBasePathForRouter;
    const controller = require(path.resolve(controllerBasePath+"/"+serviceName+".controller.ts"));

    routes.forEach((route)=>{
        const handler = controller[serviceName+"Controller"][route.handler];
        const httpMethod : HttpMethod = route.method as HttpMethod;  

        switch (httpMethod){
            case HttpMethod.GET:
                router.get(
                    route.path,
                    authMiddleware,
                    (req: Request, res: Response, next: NextFunction) => handler(req,res).catch(next)
                )
                break;
            case HttpMethod.POST:
                router.post(
                    route.path,
                    authMiddleware,
                    (req: Request, res: Response, next: NextFunction) => handler(req,res).catch(next)
                )
                break;
            default:
                break;
        }
    })

    return router;
}

export default createRouter;
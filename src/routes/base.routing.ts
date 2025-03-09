import express from 'express';
import fs from 'fs';
import createRouter from './route-creator';

const baseRouter = express.Router();
const services = JSON.parse(fs.readFileSync('./src/config/services.json','utf-8')).services;

Object.keys(services).forEach((serviceName: string) => {
    const { basePath, routes } = services[serviceName];
    const router = createRouter(serviceName, routes);
    baseRouter.use(basePath, router);
});

export default baseRouter;

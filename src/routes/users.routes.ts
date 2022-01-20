import { Express, Request, Response } from "express";

import {getall} from '../controller/data.controller';

// router.get("/",UserController.sampleUser);


export default function (app: Express) {

    app.get("/getAll", getall);

}

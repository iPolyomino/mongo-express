import express from "express";
import routes from "../routes";

import { homeController } from "../controllers/homeController";

const homeRouter = express.Router();

homeRouter.get(routes.home, homeController);

export default homeRouter;

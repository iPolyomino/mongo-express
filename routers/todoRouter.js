import express from "express";
import routes from "../routes";

import { readAllTodo } from "../controllers/todoController";

const todoRouter = express.Router();

todoRouter.get(routes.home, readAllTodo);

export default todoRouter;

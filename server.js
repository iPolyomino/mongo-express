import express from "express";

import homeRouter from "./routers/homeRouter";
import todoRouter from "./routers/todoRouter";
import routes from "./routes";

const app = express();

const HOST = "0.0.0.0";
const PORT = process.env.PORT || 3000;

app.use(routes.home, homeRouter);
app.use(routes.todo, todoRouter);

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);

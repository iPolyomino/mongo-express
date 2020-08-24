import express from "express";

import homeRouter from "./routers/homeRouter";
import todoRouter from "./routers/todoRouter";
import routes from "./routes";

const app = express();
const port = process.env.PORT || 3000;

app.use(routes.home, homeRouter);
app.use(routes.todo, todoRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

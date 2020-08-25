import express from "express";
import mongoose from "mongoose";

import homeRouter from "./routers/homeRouter";
import todoRouter from "./routers/todoRouter";
import routes from "./routes";

const app = express();

const HOST = "0.0.0.0";
const PORT = process.env.PORT || 3000;
const DB_PORT = 27017;
const DB_URL = `mongodb://${HOST}:${DB_PORT}/todo`;

app.use(routes.home, homeRouter);
app.use(routes.todo, todoRouter);

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);

mongoose.Promise = global.Promise;
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", (_) => {
  console.log("Database connected:", url);
});
db.on("error", (err) => {
  console.error(`MongoDB connection error:${err}`);
  process.exit(-1);
});

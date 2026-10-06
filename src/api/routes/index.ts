import { Router } from "express";
import booksRouter from "./books.js";
import getStatus from "../controllers/status.controller.js";

const apiRouter = Router();

apiRouter.use("/status", getStatus);

apiRouter.use("/books", booksRouter);

export default apiRouter;

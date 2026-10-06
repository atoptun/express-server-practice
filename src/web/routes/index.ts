import { Router } from "express";
import booksRouter from "./books.js";

const webRouter = Router();

webRouter.get("/", (req, res) => {
  res.render("index", { title: "Головна" });
});

webRouter.get("/about", (req, res) => {
  res.render("about");
});

webRouter.use(booksRouter);

export default webRouter;

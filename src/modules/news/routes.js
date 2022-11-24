import { Router } from "express";
import validation from "../../middleware/validation.js";
import news from "./news.js";
import { NewsPostSchema, NewsPutSchema } from "../../validation/validation.js";

const newsRoutes = Router();

export default newsRoutes
    .get("/news", news.GET)
    .post("/news", validation(NewsPostSchema), news.POST)
    .put("/news/:id", validation(NewsPutSchema), news.PUT)
    .delete("/news/:id", news.DELETE);

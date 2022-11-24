import { Router } from "express";
import validation from "../../middleware/validation.js";
import {
    GalaryPostSchema,
    GalaryPutSchema,
} from "../../validation/validation.js";
import galary from "./galary.js";

const GalaryRoutes = Router();

export default GalaryRoutes
    .get("/galery", galary.GET)
    .post("/galery", validation(GalaryPostSchema), galary.POST)
    .put("/galery/:id", validation(GalaryPutSchema), galary.PUT)
    .delete("/galery/:id", galary.DELETE);

import { Router } from "express";
import validation from "../../middleware/validation.js";
import {
    GalaryPostSchema,
    GalaryPutSchema,
} from "../../validation/validation.js";
import galary from "./galary.js";

const GalaryRoutes = Router();

export default GalaryRoutes
    .get("/galary", galary.GET)
    .post("/galary", validation(GalaryPostSchema), galary.POST)
    .put("/galary/:id", validation(GalaryPutSchema), galary.PUT)
    .delete("/galary/:id", galary.DELETE);

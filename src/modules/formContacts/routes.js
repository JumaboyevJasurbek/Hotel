import { Router } from "express";
import validation from "../../middleware/validation.js";
import formContact from "./formContact.js";
import {
    FormContactPostSchema,
    FormContactPutSchema,
} from "../../validation/validation.js";

const formContactRoutes = Router();

export default formContactRoutes
    .get("/formContact", formContact.GET)
    .post("/formContact", validation(FormContactPostSchema), formContact.POST)
    .put("/formContact/:id", validation(FormContactPutSchema), formContact.PUT)
    .delete("/formContact/:id", formContact.DELETE);

import { Router } from "express";
import validation from "../../middleware/validation.js";
import contacts from "./contacts.js";
import {
    ContactsPostSchema,
    ContactsPutSchema,
} from "../../validation/validation.js";

const contactsRoutes = Router();

export default contactsRoutes
    .get("/contacts", contacts.GET)
    .post("/contacts", validation(ContactsPostSchema), contacts.POST)
    .put("/contacts/:id", validation(ContactsPutSchema), contacts.PUT)
    .delete("/contacts/:id", contacts.DELETE);

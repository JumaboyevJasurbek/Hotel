import { Router } from "express";

import contactsRoutes from "./contacts/routes.js";
import FormContactRoutes from "./formContacts/routes.js";

const router = Router();

export default router.use("/", contactsRoutes, FormContactRoutes);

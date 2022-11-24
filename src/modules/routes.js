import { Router } from "express";

import contactsRoutes from "./contacts/routes.js";
import FormContactRoutes from "./formContacts/routes.js";
import GalaryRoutes from "./galary/routes.js";
import newsRoutes from "./news/routes.js";
import roomsOurRoutes from "./rooms_our/routes.js";
import visitorReviewsRoutes from "./visitor_reviews/routes.js";

const router = Router();

export default router.use(
    "/",
    contactsRoutes,
    FormContactRoutes,
    GalaryRoutes,
    newsRoutes,
    roomsOurRoutes,
    visitorReviewsRoutes
);

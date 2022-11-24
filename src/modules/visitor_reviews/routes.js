import { Router } from "express";
import validation from "../../middleware/validation.js";
import {
    VisitorReviewsPostSchema,
    VisitorReviewsPutSchema,
} from "../../validation/validation.js";
import visitor_reviews from "./visitor_reviews.js";

const visitorReviewsRoutes = Router();

export default visitorReviewsRoutes
    .get("/visitor_reviews", visitor_reviews.GET)
    .post(
        "/visitor_reviews",
        validation(VisitorReviewsPostSchema),
        visitor_reviews.POST
    )
    .put(
        "/visitor_reviews/:id",
        validation(VisitorReviewsPutSchema),
        visitor_reviews.PUT
    )
    .delete("/visitor_reviews/:id", visitor_reviews.DELETE);

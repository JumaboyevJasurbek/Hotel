import { Router } from "express";
import validation from "../../middleware/validation.js";
import {
    VisitorReviewsPostSchema,
    VisitorReviewsPutSchema,
} from "../../validation/validation.js";

const visitorReviewsRoutes = Router();

export default visitorReviewsRoutes
    .get("/visitorReviews", visitorReviews.GET)
    .post(
        "/visitorReviews",
        validation(VisitorReviewsPostSchema),
        visitorReviews.POST
    )
    .put(
        "/visitorReviews/:id",
        validation(VisitorReviewsPutSchema),
        visitorReviews.PUT
    )
    .delete("/visitorReviews/:id", visitorReviews.DELETE);

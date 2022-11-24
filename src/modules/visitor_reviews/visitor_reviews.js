import { ErrorHandler } from "../../exceptions/ErrorHandler.js";
import {
    allVisitorReviews,
    createVisitorReviews,
    updateVisitorReviews,
    deleteVisitorReviews,
} from "./model.js";

export default {
    GET: async (_, res, __) => {
        res.json(await allVisitorReviews());
    },

    POST: async (req, res, next) => {
        const { avatar_image, description, date } = req.filtered;
        const newVisitorReviews = await createVisitorReviews(
            avatar_image,
            description,
            date
        ).catch(() => next(new ErrorHandler(), 503));

        res.status(201).json({
            message: "Created",
            status: 201,
            date: newVisitorReviews,
        });
    },

    PUT: async (req, res, next) => {
        const { id } = req.params;
        const { avatar_image, description, date } = req.filtered;

        // console.log(req.filtered);

        const updatedVisitorReviews = await updateVisitorReviews(
            avatar_image,
            description,
            date,
            id
        );

        res.status(204).json({
            message: "Updated",
            status: 204,
            date: updatedVisitorReviews,
        });
    },

    DELETE: async (req, res, _) => {
        const { id } = req.params;

        const deletedVisitorReviews = await deleteVisitorReviews(id);

        res.status(204).json({
            message: "Deleted",
            status: 204,
            date: deletedVisitorReviews,
        });
    },
};

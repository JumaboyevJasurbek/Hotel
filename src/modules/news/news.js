import { ErrorHandler } from "../../exceptions/ErrorHandler.js";
import { allNews, createNews, updateNews, deleteNews } from "./model.js";

export default {
    GET: async (_, res, __) => {
        res.json(await allNews());
    },

    POST: async (req, res, next) => {
        const { image_news, news_title, news_description } = req.filtered;
        const newGalary = await createNews(
            image_news,
            news_title,
            news_description
        ).catch(() => next(new ErrorHandler(), 503));

        res.status(201).json({
            message: "Created",
            status: 201,
            date: newGalary,
        });
    },

    PUT: async (req, res, next) => {
        const { id } = req.params;
        const { image_news, news_title, news_description } = req.filtered;

        // console.log(req.filtered);

        const updatedGalary = await updateNews(
            image_news,
            news_title,
            news_description,
            id
        );

        res.status(204).json({
            message: "Updated",
            status: 204,
            date: updatedGalary,
        });
    },

    DELETE: async (req, res, next) => {
        const { id } = req.params;

        const deletedGalary = await deleteNews(id);

        res.status(204).json({
            message: "Deleted",
            status: 204,
            date: deletedGalary,
        });
    },
};

import { ErrorHandler } from "../../exceptions/ErrorHandler.js";
import {
    allGalary,
    createGalary,
    updateGalary,
    deleteGalary,
} from "./model.js";

export default {
    GET: async (_, res, __) => {
        res.json(await allGalary());
    },

    POST: async (req, res, next) => {
        const { image_galery } = req.filtered;
        const newGalary = await createGalary(image_galery).catch(() =>
            next(new ErrorHandler(), 503)
        );

        res.status(201).json({
            message: "Created",
            status: 201,
            date: newGalary,
        });
    },

    PUT: async (req, res, next) => {
        const { id } = req.params;
        const { image_galery } = req.filtered;

        // console.log(req.filtered);

        const updatedGalary = await updateGalary(image_galery, id);

        res.status(204).json({
            message: "Updated",
            status: 204,
            date: updatedGalary,
        });
    },

    DELETE: async (req, res, next) => {
        const { id } = req.params;

        const deletedGalary = await deleteGalary(id);

        res.status(204).json({
            message: "Deleted",
            status: 204,
            date: deletedGalary,
        });
    },
};

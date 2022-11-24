import { ErrorHandler } from "../../exceptions/ErrorHandler.js";
import { allRooms, deleteRooms, updateRooms, createRooms } from "./model.js";

export default {
    GET: async (_, res, __) => {
        res.json(await allRooms());
    },

    POST: async (req, res, next) => {
        const { image_room, title_room, area_room, number_guests, cost_night } =
            req.filtered;
        const newRooms = await createRooms(
            image_room,
            title_room,
            area_room,
            number_guests,
            cost_night
        ).catch(() => next(new ErrorHandler(), 503));

        res.status(201).json({
            message: "Created",
            status: 201,
            date: newRooms,
        });
    },

    PUT: async (req, res, next) => {
        const { id } = req.params;
        const { image_room, title_room, area_room, number_guests, cost_night } =
            req.filtered;

        // console.log(req.filtered);

        const updatedRooms = await updateRooms(
            image_room,
            title_room,
            area_room,
            number_guests,
            cost_night,
            id
        );

        res.status(204).json({
            message: "Updated",
            status: 204,
            date: updatedRooms,
        });
    },

    DELETE: async (req, res, next) => {
        const { id } = req.params;

        const deletedGalary = await deleteRooms(id);

        res.status(204).json({
            message: "Deleted",
            status: 204,
            date: deletedGalary,
        });
    },
};

import { ErrorHandler } from "../../exceptions/ErrorHandler.js";
import {
    allContacts,
    createContacts,
    deleteContact,
    updateContact,
} from "./model.js";

export default {
    GET: async (_, res, __) => {
        res.json(await allContacts());
    },

    POST: async (req, res, next) => {
        const { phone_number, room, kids, adults, check_in, departure } =
            req.filtered;
        const newContacts = await createContacts(
            phone_number,
            room,
            kids,
            adults,
            check_in,
            departure
        ).catch(() => next(new ErrorHandler(), 503));

        res.status(201).json({
            message: "Created",
            status: 201,
            date: newContacts,
        });
    },

    PUT: async (req, res, next) => {
        const { id } = req.params;
        const { phone_number, room, kids, adults, check_in, departure } =
            req.filtered;

        // console.log(req.filtered);

        const updatedContact = await updateContact(
            phone_number,
            room,
            kids,
            adults,
            check_in,
            departure,
            id
        );

        res.status(204).json({
            message: "Updated",
            status: 204,
            date: updatedContact,
        });
    },

    DELETE: async (req, res, next) => {
        const { id } = req.params;

        const deletedContact = await deleteContact(id);

        res.status(204).json({
            message: "Deleted",
            status: 204,
            date: deletedContact,
        });
    },
};

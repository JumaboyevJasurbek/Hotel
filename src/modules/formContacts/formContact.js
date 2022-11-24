import { ErrorHandler } from "../../exceptions/ErrorHandler.js";
import {
    allFormFormContacts,
    createFormContacts,
    updateFormContacts,
    deleteFormContacts,
} from "./model.js";

export default {
    GET: async (_, res, __) => {
        res.json(await allFormFormContacts());
    },

    POST: async (req, res, next) => {
        const { email, phone_number } = req.filtered;
        const newFormContacts = await createFormContacts(
            email,
            phone_number
        ).catch(() => next(new ErrorHandler(), 503));

        res.status(201).json({
            message: "Created",
            status: 201,
            date: newFormContacts,
        });
    },

    PUT: async (req, res, next) => {
        const { id } = req.params;
        const { email, phone_number } = req.filtered;

        // console.log(req.filtered);

        const updatedContact = await updateFormContacts(
            email,
            phone_number,
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

        const deletedContact = await deleteFormContacts(id);

        res.status(204).json({
            message: "Deleted",
            status: 204,
            date: deletedContact,
        });
    },
};

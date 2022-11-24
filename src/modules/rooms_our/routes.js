import { Router } from "express";
import validation from "../../middleware/validation.js";
// import {
//     RoomsOurPostSchema,
//     RoomsOurPutSchema,
// } from "../../validation/validation.js";

const roomsOurRoutes = Router();

export default roomsOurRoutes
    .get("/rooms_our", rooms_our.GET)
    .post("/rooms_our", validation(RoomsOurPostSchema), rooms_our.POST)
    .put("/rooms_our/:id", validation(RoomsOurPutSchema), rooms_our.PUT)
    .delete("/rooms_our/:id", rooms_our.DELETE);

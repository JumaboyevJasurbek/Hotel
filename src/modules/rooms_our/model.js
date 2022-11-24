import { fetchData } from "../../utils/postgres.js";

const ALL_ROOMS = `
    SELECT * FROM rooms_our
`;

const NEW_ROOMS = `
    INSERT INTO rooms_our(image_room, title_room, area_room, number_guests, cost_night) VALUES(
        $1,
        $2,
        $3,
        $4,
        $5
    )RETURNING *
`;

const UPDATE_ROOMS = `
    UPDATE rooms_our SET image_room = $1, title_room = $2, area_room = $3, number_guests = $4, cost_night = $5 WHERE rooms_our_id = $6 RETURNING *
`;

const DELETE_ROOMS = `
DELETE FROM rooms_our where rooms_our_id = $1`;

export const allRooms = () => fetchData(ALL_ROOMS);

export const createRooms = (
    image_room,
    title_room,
    area_room,
    number_guests,
    cost_night
) =>
    fetchData(
        NEW_ROOMS,
        image_room,
        title_room,
        area_room,
        number_guests,
        cost_night
    );

export const updateRooms = async (
    image_room,
    title_room,
    area_room,
    number_guests,
    cost_night,
    id
) => {
    const [oldRooms] = await fetchData(
        "SELECT * FROM rooms_our     where rooms_our_id = $1",
        id
    );

    return fetchData(
        UPDATE_ROOMS,
        image_room ? image_room : oldRooms.image_room,
        title_room ? title_room : oldRooms.title_room,
        area_room ? area_room : oldRooms.area_room,
        number_guests ? number_guests : oldRooms.number_guests,
        cost_night ? cost_night : oldRooms.cost_night,
        id
    );
};
export const deleteRooms = async (id) => {
    await fetchData("SELECT * FROM rooms_our where rooms_our_id = $1", id);

    return fetchData(DELETE_ROOMS, id);
};

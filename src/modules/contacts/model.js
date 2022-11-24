import { fetchData } from "../../utils/postgres.js";

const ALL_CONTACTS = `
    SELECT * FROM contacts
`;

const NEW_CONTACTS = `
    INSERT INTO contacts(phone_number, room, kids, adults, check_in, departure) VALUES(
        $1,
        $2,
        $3,
        $4,
        $5,
        $6
    )RETURNING *
`;

const UPDATE_CONTACTS = `
    UPDATE contacts SET phone_number = $1, room = $2, kids = $3, adults = $4, check_in = $5, departure = $6 WHERE  contacts_id = $7 RETURNING *
`;

const DELETE_CONTACTS = `
DELETE FROM contacts where contacts_id = $1`;

export const allContacts = () => fetchData(ALL_CONTACTS);
export const createContacts = (
    phone_number,
    room,
    kids,
    adults,
    check_in,
    departure
) =>
    fetchData(
        NEW_CONTACTS,
        phone_number,
        room,
        kids,
        adults,
        check_in,
        departure
    );

export const updateContact = async (
    phone_number,
    room,
    kids,
    adults,
    check_in,
    departure,
    id
) => {
    const [oldContacts] = await fetchData(
        "SELECT * FROM contacts where contacts_id = $1",
        id
    );

    return fetchData(
        UPDATE_CONTACTS,
        phone_number ? phone_number : oldContacts.phone_number,
        room ? room : oldContacts.room,
        kids ? kids : oldContacts.kids,
        adults ? adults : oldContacts.adults,
        check_in ? check_in : oldContacts.check_in,
        departure ? departure : oldContacts.departure,
        id
    );
};
export const deleteContact = async (id) => {
    await fetchData("SELECT * FROM contacts where contacts_id = $1", id);

    return fetchData(DELETE_CONTACTS, id);
};

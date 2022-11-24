import { fetchData } from "../../utils/postgres.js";

const ALL_FORM_CONTACTS = `
    SELECT * FROM form_contact
`;

const NEW_FORM_CONTACTS = `
    INSERT INTO form_contact(email, phone_number) VALUES(
        $1,
        $2
    )RETURNING *
`;

const UPDATE_FORM_CONTACTS = `
    UPDATE form_contact SET email = $1, phone_number = $2 WHERE  form_contact_id = $3 RETURNING *
`;

const DELETE_CONTACTS = `
DELETE FROM form_contact where form_contact_id = $1`;

export const allFormFormContacts = () => fetchData(ALL_FORM_CONTACTS);

export const createFormContacts = (email, phone_number) =>
    fetchData(NEW_FORM_CONTACTS, email, phone_number);

export const updateFormContacts = async (email, phone_number, id) => {
    const [oldContacts] = await fetchData(
        "SELECT * FROM form_contact where form_contact_id = $1",
        id
    );

    return fetchData(
        UPDATE_FORM_CONTACTS,
        email ? email : oldContacts.email,
        phone_number ? phone_number : oldContacts.phone_number,
        id
    );
};
export const deleteFormContacts = async (id) => {
    await fetchData(
        "SELECT * FROM form_contact where form_contact_id = $1",
        id
    );

    return fetchData(DELETE_CONTACTS, id);
};

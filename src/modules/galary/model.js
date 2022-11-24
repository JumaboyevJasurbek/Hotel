import { fetchData } from "../../utils/postgres.js";

const ALL_GALARY = `
    SELECT * FROM galery
`;

const NEW_GALARY = `
    INSERT INTO galery(image_galery) VALUES(
        $1
    )RETURNING *
`;

const UPDATE_GALARY = `
    UPDATE galery SET image_galery = $1 WHERE galery_id = $2 RETURNING *
`;

const DELETE_GALARY = `
DELETE FROM galery where galery_id = $1`;

export const allGalary = () => fetchData(ALL_GALARY);

export const createGalary = (image_galery) =>
    fetchData(NEW_GALARY, image_galery);

export const updateGalary = async (image_galery, id) => {
    const [oldGalery] = await fetchData(
        "SELECT * FROM galery where galery_id = $1",
        id
    );

    return fetchData(
        UPDATE_GALARY,
        image_galery ? image_galery : oldGalery.image_galery,
        id
    );
};
export const deleteGalary = async (id) => {
    await fetchData("SELECT * FROM galery where galery_id = $1", id);

    return fetchData(DELETE_GALARY, id);
};

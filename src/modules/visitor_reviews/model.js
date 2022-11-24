import { fetchData } from "../../utils/postgres.js";

const ALL_VISITOR_REVIEWS = `
    SELECT * FROM visitor_reviews
`;

const NEW_VISITOR_REVIEWS = `
    INSERT INTO visitor_reviews(avatar_image, description, date) VALUES(
        $1,
        $2,
        $3
    )RETURNING *
`;

const UPDATE_VISITOR_REVIEWS = `
    UPDATE visitor_reviews SET avatar_image = $1, description = $2, date = $3 WHERE visitor_reviews_id = $4 RETURNING *
`;

const DELETE_VISITOR_REVIEWS = `
DELETE FROM visitor_reviews where visitor_reviews_id = $1`;

export const allVisitorReviews = () => fetchData(ALL_VISITOR_REVIEWS);

export const createVisitorReviews = (avatar_image, description, date) =>
    fetchData(NEW_VISITOR_REVIEWS, avatar_image, description, date);

export const updateVisitorReviews = async (
    avatar_image,
    description,
    date,
    id
) => {
    const [oldVisitorReviews] = await fetchData(
        "SELECT * FROM visitor_reviews where visitor_reviews_id = $1",
        id
    );

    return fetchData(
        UPDATE_VISITOR_REVIEWS,
        avatar_image ? avatar_image : oldVisitorReviews.avatar_image,
        description ? description : oldVisitorReviews.description,
        date ? date : oldVisitorReviews.date,
        id
    );
};
export const deleteVisitorReviews = async (id) => {
    await fetchData(
        "SELECT * FROM visitor_reviews where visitor_reviews_id = $1",
        id
    );

    return fetchData(DELETE_VISITOR_REVIEWS, id);
};

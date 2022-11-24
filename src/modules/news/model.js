import { fetchData } from "../../utils/postgres.js";

const ALL_NEWS = `
    SELECT * FROM news
`;

const NEW_NEWS = `
    INSERT INTO news(image_news, news_title, news_description) VALUES(
        $1,
        $2,
        $3
    )RETURNING *
`;

const UPDATE_NEWS = `
    UPDATE news SET image_news = $1, news_title = $2, news_description = $3 WHERE news_id = $4 RETURNING *
`;

const DELETE_NEWS = `
DELETE FROM news where news_id = $1`;

export const allNews = () => fetchData(ALL_NEWS);

export const createNews = (image_news, news_title, news_description) =>
    fetchData(NEW_NEWS, image_news, news_title, news_description);

export const updateNews = async (
    image_news,
    news_title,
    news_description,
    id
) => {
    const [oldNews] = await fetchData(
        "SELECT * FROM news where news_id = $1",
        id
    );

    return fetchData(
        UPDATE_NEWS,
        image_news ? image_news : oldNews.image_news,
        news_title ? news_title : oldNews.news_title,
        news_description ? news_description : oldNews.news_description,
        id
    );
};
export const deleteNews = async (id) => {
    await fetchData("SELECT * FROM news where news_id = $1", id);

    return fetchData(DELETE_NEWS, id);
};

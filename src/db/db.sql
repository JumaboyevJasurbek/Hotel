CREATE TABLE contacts(
    contacts_id serial PRIMARY KEY,
    phone_number varchar not null,
    room varchar not null,
    kids varchar not null,
    adults varchar not null,
    check_in varchar not null,
    departure varchar not null
);


CREATE TABLE form_contact(
    form_contact_id serial PRIMARY KEY,
    email varchar not null,
    phone_number varchar not null
);


CREATE TABLE news(
    news_id serial PRIMARY KEY,
    image_news varchar not null,
    image_title varchar not null,
    image_description varchar not null
);


CREATE TABLE visitor_reviews(
    visitor_reviews_id serial PRIMARY KEY,
    avatar_image varchar not null,
    description varchar not null,
    date varchar not null
);


CREATE TABLE rooms_our(
    rooms_our_id serial PRIMARY KEY,
    image_room varchar not null,
    title_room varchar not null,
    area_room varchar not null,
    number_guests varchar not null,
    cost_night varchar not null
);


CREATE TABLE galery(
    galery_id serial PRIMARY KEY,
    image_galery varchar not null
);



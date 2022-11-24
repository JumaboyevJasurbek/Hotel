import Joi from "joi";

// ? Contacts
export const ContactsPostSchema = Joi.object({
    phone_number: Joi.string().required(),
    room: Joi.string().required(),
    kids: Joi.string().required(),
    adults: Joi.string().required(),
    check_in: Joi.string().required(),
    departure: Joi.string().required(),
}).required();

export const ContactsPutSchema = Joi.object({
    phone_number: Joi.string(),
    room: Joi.string(),
    kids: Joi.string(),
    adults: Joi.string(),
    check_in: Joi.string(),
    departure: Joi.string(),
}).required();

// ? FormContacts
export const FormContactPostSchema = Joi.object({
    email: Joi.string().required(),
    phone_number: Joi.string().required(),
}).required();

export const FormContactPutSchema = Joi.object({
    email: Joi.string(),
    phone_number: Joi.string(),
}).required();

// ? Galary
export const GalaryPostSchema = Joi.object({
    image_galary: Joi.string().required(),
}).required();

export const GalaryPutSchema = Joi.object({
    image_galary: Joi.string(),
}).required();

// ? News
export const NewsPostSchema = Joi.object({
    phone_number: Joi.string().required(),
    room: Joi.string().required(),
    kids: Joi.string().required(),
    adults: Joi.string().required(),
    check_in: Joi.string().required(),
    departure: Joi.string().required(),
}).required();

export const NewsPutSchema = Joi.object({
    phone_number: Joi.string(),
    room: Joi.string(),
    kids: Joi.string(),
    adults: Joi.string(),
    check_in: Joi.string(),
    departure: Joi.string(),
}).required();

// ? RoomOur
export const RoomOurPostSchema = Joi.object({
    image_room: Joi.string().required(),
    title_room: Joi.string().required(),
    area_room: Joi.string().required(),
    number_guests: Joi.string().required(),
    cost_night: Joi.string().required(),
}).required();

export const RoomOurPutSchema = Joi.object({
    image_room: Joi.string(),
    title_room: Joi.string(),
    area_room: Joi.string(),
    number_guests: Joi.string(),
    cost_night: Joi.string(),
}).required();

// ? VisitorReviews
export const VisitorReviewsPostSchema = Joi.object({
    avatar_images: Joi.string(),
    description: Joi.string(),
    date: Joi.string(),
}).required();

export const VisitorReviewsPutSchema = Joi.object({
    avatar_images: Joi.string(),
    description: Joi.string(),
    date: Joi.string(),
}).required();

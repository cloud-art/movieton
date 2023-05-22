import { Model, Optional } from "sequelize";

export interface IFilmAttributes {
    id: number;
    title: string,
    desc: string,
    short_desc: string,
    rating: number,
    duration: number,
    date: Date,
    age_limit: number,
    img: string,
    genres: [],
} 

export type FilmCreationAttributes = Optional<IFilmAttributes, 'id'>

export type FilmModel = Model<IFilmAttributes, FilmCreationAttributes>
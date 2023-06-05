import { IGenre } from "./IGenre";

export interface IFilm {
    id: number;
    title: string;
    desc: string;
    short_desc: string;
    rating: number;
    duration: number;
    date: Date;
    age_limit: number;
    img: string;
    genres: Array<IGenre>;
}

export interface IFilmsInfo{
    isFetching: boolean;
    isLoading: boolean;
    count: number;
    films: Array<IFilm>;
}

export default interface IFilmCard {
    id: number;
    img: string;
    title: string;
    rating: number;
    year: number;
    genre: IGenre;
    duration: string;
}

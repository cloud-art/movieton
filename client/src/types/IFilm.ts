import { IGenre } from "./IGenre";
import IPerson from "./IPerson";

export interface IFilm {
    id: number;
    title: string;
    desc: string;
    short_desc: string;
    rating: number;
    duration: number;
    date: Date;
    ageLimit: number;
    img: string;
    genres: Array<IGenre>;
    actors?: Array<IPerson>;
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

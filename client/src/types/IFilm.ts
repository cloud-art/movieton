import { IGenre } from "./IGenre";
import { IPerson } from "./IPerson";

export interface IFilm {
    id: number;
    kinopoiskId?: number;
    title: string;
    desc: string;
    short_desc: string;
    rating: number;
    duration: number;
    date: Date;
    ageLimit: number;
    img: string;
    genres: Array<IGenre>;
    writers?: Array<IPerson>;
    actors?: Array<IPerson>;
}

export interface IFilmsInfo{
    isFetching?: boolean;
    isLoading?: boolean;
    count: number;
    films: Array<IFilm>;
}

export interface IFilmCard {
    id: number;
    img: string;
    title: string;
    rating: number;
    year: number;
    genre: IGenre;
    duration: number;
}

export interface IReview{
    id?: number;
    title: string;
    positive: string;
    negative: string;
    filmId: number;
    userId: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface IComment{
    id: number;
    text: string;
    filmId: number;
    userId: number;
    createdAt: string;
    updatedAt?: string;
}

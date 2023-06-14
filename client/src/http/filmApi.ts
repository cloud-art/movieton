import { $authHost, $host } from ".";
import {IFilm} from "../types/IFilm";
import { IFilters } from "../types/IFilters";
import { IGenre } from "../types/IGenre";
import { IPerson } from "../types/IPerson";

export const createFilm = async (
    title: string, 
    desc: string, 
    shortDesc: string, 
    rating: number, 
    duration: number, 
    date: Date, 
    ageLimit: number, 
    img: File, 
    genres: Array<IGenre>, 
    writers: Array<IPerson>, 
    actors: Array<IPerson>
) => {
    var favouriteFilm = new FormData();
    favouriteFilm.append("title", title);
    favouriteFilm.append("desc", desc);
    favouriteFilm.append("short_desc", shortDesc);
    favouriteFilm.append("rating", String(rating));
    favouriteFilm.append("duration", String(duration));
    favouriteFilm.append("date", String(date));
    favouriteFilm.append("age_limit", String(ageLimit));
    favouriteFilm.append("img", img);
    favouriteFilm.append("genres", JSON.stringify(genres));
    favouriteFilm.append("writers", JSON.stringify(writers));
    favouriteFilm.append("actors", JSON.stringify(actors));
    const {data} = await $authHost.post('api/film/create', favouriteFilm)
    return data
}

export const fetchFilms = async (page: number, filters: IFilters) => {
    const {data: films} = await $host.get(`api/film/getAll?ratingLower=${filters.ratingLower}&ratingUpper=${filters.ratingUpper}&year=${filters.year}&genre=${filters.genre}&sortType=${filters.sortType}&page=${page}&limit=${process.env.REACT_APP_FILMS_OFFSET || 12}`)
    return films
}

export const fetchFilmsByName = async (page: number,  filters: IFilters, name: string, limit?: number) => {
    const {data: films} = await $host.get(`api/film/getAll?ratingLower=${filters.ratingLower}&ratingUpper=${filters.ratingUpper}&year=${filters.year}&genre=${filters.genre}&sortType=${filters.sortType}&page=${page}&limit=${limit? limit : process.env.REACT_APP_FILMS_OFFSET || 12}&name=${name}`)
    return films
}

export const fetchOneFilm = async (id: number) => {
    const {data: film} = await $host.get(`api/film/getOne/${id}`)
    return film
}

export const deleteFilm = async (filmId: number) => {
    const {data: film} = await $host.delete(`api/film/delete/${filmId}`)
    return film
}

export const fetchGenres = async () => {
    const {data: genres} = await $host.get(`api/genre/getAll`)
    return genres
}

export const createGenre = async (title: string) => {
    const {data: genre} = await $host.post(`api/genre/create`, {title})
    return genre
}

// export const check = async () => {
//     const {data} = await $authHost.get('api/user/auth')
//     localStorage.setItem('token', data.token)
//     return jwt_decode(data.token)
// }
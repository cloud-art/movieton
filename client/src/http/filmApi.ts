import { $authHost, $host } from ".";
import {IFilm} from "../types/IFilm";
import { IFilters } from "../types/IFilters";

export const createFilm = async (film: IFilm) => {
    const {data} = await $authHost.post('api/film/create', film)
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

// export const check = async () => {
//     const {data} = await $authHost.get('api/user/auth')
//     localStorage.setItem('token', data.token)
//     return jwt_decode(data.token)
// }
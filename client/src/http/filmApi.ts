import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode"
import {IFilm} from "../types/IFilm";
import { IFilters } from "../types/IFilters";

export const createFilm = async (film: IFilm) => {
    const {data} = await $authHost.post('api/film/create', film)
    return data
}

export const fetchFilms = async (page, filters: IFilters) => {
    const {data} = await $host.get(`api/film/getAll?ratingLower=${filters.ratingLower}&ratingUpper=${filters.ratingUpper}&year=${filters.year}&genre=${filters.genre}&sortType=${filters.sortType}&page=${page}&limit=${process.env.REACT_APP_FILMS_OFFSET || 12}`)
    return data
}

// export const check = async () => {
//     const {data} = await $authHost.get('api/user/auth')
//     localStorage.setItem('token', data.token)
//     return jwt_decode(data.token)
// }
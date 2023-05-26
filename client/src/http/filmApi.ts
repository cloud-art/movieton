import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode"
import IFilm from "../types/IFilm";

export const createFilm = async (film: IFilm) => {
    const {data} = await $authHost.post('api/film/create', film)
    return data
}

export const fetchFilms = async () => {
    const {data} = await $host.get('api/film/getAll')
    return data
}

// export const check = async () => {
//     const {data} = await $authHost.get('api/user/auth')
//     localStorage.setItem('token', data.token)
//     return jwt_decode(data.token)
// }
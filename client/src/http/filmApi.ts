import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode"
import {IFilm} from "../types/IFilm";
import { IFilters } from "../types/IFilters";
import { AxiosResponse } from "axios";

export const createFilm = async (film: IFilm) => {
    const {data} = await $authHost.post('api/film/create', film)
    return data
}

export const fetchFilms = async (page: number, filters: IFilters) => {
    const {data: films} = await $host.get(`api/film/getAll?ratingLower=${filters.ratingLower}&ratingUpper=${filters.ratingUpper}&year=${filters.year}&genre=${filters.genre}&sortType=${filters.sortType}&page=${page}&limit=${process.env.REACT_APP_FILMS_OFFSET || 12}`)
    return films
}

export const fetchOneFilm = async (id: number) => {
    const {data: film} = await $host.get(`api/film/getOne/${id}`)
    return film
}

export const fetchReviews = async (movieId: number, limit?: number) => {
    if(limit){
        const {data: reviews} = await $host.get(`api/review/getAll/${movieId}/${limit}`) 
        return reviews

    }else{
        const {data: reviews} = await $host.get(`api/review/getAll/${movieId}`) 
        return reviews
    }
}

export const fetchComments = async (movieId: number, limit?: number) => {
    if(limit){
        const {data: comments} = await $host.get(`api/comment/getAll/${movieId}/${limit}`) 
        return comments

    }else{
        const {data: comments} = await $host.get(`api/comments/getAll/${movieId}`) 
        return comments
    }
}

export const fetchFavourite = async (userId: number, page?:number, limit?: number) => {
    if(limit){
        const {data: favourites} = await $host.get(`api/favourites/getAll/${userId}?limit=${limit}&page=${page}`)
        return favourites
    }else{
        const {data: favourite} = await $host.get(`api/favourites/getAll/${userId}`)
        return favourite
    }
}

// export const check = async () => {
//     const {data} = await $authHost.get('api/user/auth')
//     localStorage.setItem('token', data.token)
//     return jwt_decode(data.token)
// }
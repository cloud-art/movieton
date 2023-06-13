import { $host } from "."   

export const fetchFavourite = async (userId: number, page?:number, limit?: number) => {
    if(limit){
        const {data: favourites} = await $host.get(`api/favourites/getAll/${userId}?limit=${limit}&page=${page}`)
        return favourites
    }else{
        const {data: favourite} = await $host.get(`api/favourites/getAll/${userId}`)
        return favourite
    }
}

export const fetchFavouriteInfo = async (userId: number) => {
    const {data} = await $host.get(`api/favourites/getFavourite?${userId}`)
    return data
}

export const fetchOneFavouriteFilm = async (favouriteFilmId: number) => {
    const {data} = await $host.get(`api/favourites/getOneFavouriteFilm/${favouriteFilmId}`)
    return data
}

export const fetchOneFavouriteFilmByUser = async (userId: number, filmId: number) => {
    const {data} = await $host.get(`api/favourites/getOneFavouriteFilm?userId=${userId}&filmId=${filmId}`)
    return data
}

export const createFavouriteFilm = async (favouriteId: number, filmId: number) => {
    var favouriteFilm = new FormData();
    favouriteFilm.append("favouriteId", String(favouriteId));
    favouriteFilm.append("filmId", String(filmId));

    const {data} = await $host.post("/api/favourites/createFavouriteFilm", favouriteFilm);
    return data
}

export const deleteFavouriteFilm = async (favouriteFilmId: number) => {
    const {data} = await $host.delete(`api/favourites/deleteFavouriteFilm/${favouriteFilmId}`)
    return data
}
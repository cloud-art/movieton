import { $host } from "."
import { IReview } from "../types/IFilm"

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

export const createReview = async (filmId: number, userId: number, review: IReview) => {
    var commentData = new FormData();
    commentData.append("title", review.title);
    commentData.append("positive", review.positive);
    commentData.append("negative", review.negative);
    commentData.append("userId", String(review.userId));
    commentData.append("filmId", String(review.filmId));
    commentData.append("star", String(10));

    const {data} = await $host.post('api/review/create', commentData);
    return data;
}

export const createComment = async (filmId: number, userId: number, text: string) => {
    var commentData = new FormData();
    commentData.append("text", text);
    commentData.append("filmId", String(filmId));
    commentData.append("userId", String(userId));

    const {data: comment} = await $host.post('api/comment/create', commentData);
    return comment;
}
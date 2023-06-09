import React from "react";
import s from './ReviewsList.module.scss'
import { IReview } from "../../types/IFilm";
import Item from "./components/Item/Item";
import ButtonDefault from "../UI/ButtonDefault/ButtonDefault";

type ReviewsListProps = {
    reviews: Array<IReview>;
}

const ReviewsList: React.FC<ReviewsListProps> = ({
    reviews,
}) => {
        return(
        <>
            {reviews?.map((review) => {
                return <Item key={review.id} review={review} />;
            })}
        </>
        )
    }

export default ReviewsList
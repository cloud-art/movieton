import React from 'react'
import { IReview } from '../../../../../types/IFilm'
import ReviewsList from '../../../../ReviewsList/ReviewsList'
import LoadMoreButton from '../../../../UI/LoadMoreButton/LoadMoreButton';

type ReviewsWrapperProps = {
    reviews: Array<IReview>;
    limit: number;
    setLimit: () => void;
    count: number;
}

const ReviewsWrapper:React.FC<ReviewsWrapperProps> = ({
    reviews,
    limit,
    setLimit,
    count,
}) => {
  return (
    <>
        <ReviewsList reviews={reviews}/>
        {limit <= count &&
        <LoadMoreButton handleClick={setLimit}>
            Загрузить ещё
        </LoadMoreButton>
        }
    </>
  )
}

export default ReviewsWrapper
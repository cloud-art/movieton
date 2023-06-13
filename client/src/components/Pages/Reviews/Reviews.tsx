import React, { useEffect, useRef, useState } from 'react';
import s from './Reviews.module.scss';
import { IReview } from '../../../types/IFilm';
import ReviewsList from '../../ReviewsList/ReviewsList';
import { fetchReviews } from '../../../http/reviewApi';
import { useParams } from 'react-router-dom';
import { Title } from '../../UI/Title/Title';
import ReviewsWrapper from './components/ReviewsWrapper/ReviewsWrapper';
import classNames from 'classnames';

function Reviews() {
    const {id: filmId} = useParams()
    const [reviews, setReviews] = useState<Array<IReview>>()
    const [count, setCount] = useState<number>(0)
    const limitStep = 5
    const limit = useRef(limitStep)

    useEffect(() => {
        if (filmId){
            fetchReviews(parseInt(filmId), limitStep).then(reviews => {
                setReviews(reviews.rows)
                setCount(reviews.count)
            }).finally(() => console.log(reviews))
        }
    }, [])

    const handleSetLimit = () => {
        limit.current += limitStep
        filmId &&
        fetchReviews(parseInt(filmId), limit.current).then(reviews => {
            setReviews(reviews.rows)
        })
    }

    return (
            <div className={s.Reviews}>
                <div className="container">
                    {reviews ? (  
                    <ReviewsWrapper 
                        reviews={reviews}
                        limit={limit.current}
                        setLimit={handleSetLimit}
                        count={count}
                    />
                    ) :
                    <Title>Отзывов не найдено</Title> 
                    }
                </div>
            </div>
        
        
    );
}

export default Reviews;

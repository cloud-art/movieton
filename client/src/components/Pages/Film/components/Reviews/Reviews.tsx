import React, { useEffect, useState } from 'react'
import { fetchReviews } from '../../../../../http/filmApi';
import s from './Reviews.module.scss'
import { IReview } from '../../../../../types/IFilm';
import { Title } from '../../../../UI/Title/Title';
import ButtonDefault from '../../../../UI/ButtonDefault/ButtonDefault';
import Item from './components/Item';
import { useNavigate } from 'react-router-dom';
import { REVIEWS_ROUTE } from '../../../../../utils/consts';
import ReviewsList from '../../../../ReviewsList/ReviewsList';

type ReviewsProps = {
    movieId: number;
}

const Reviews:React.FC<ReviewsProps> = ({movieId}) => {
    const [reviews, setReviews] = useState<Array<IReview>>()
    const [count, setCount] = useState<number>(0)
    const [limit, setLimit] = useState<number>(3)
    const navigate = useNavigate()

    useEffect(() => {
        fetchReviews(movieId, limit).then(reviews => {
            setReviews(reviews.rows)
            setCount(reviews.count)
        })
    }, [])

    const handleNavigateReviews = () => {
        navigate(REVIEWS_ROUTE + `/${movieId}`)
    }


    return (
        <>
            {reviews?.length? (
                <div className={s.container}>
					<Title variant="h2" className={s.title}>
						Рецензии пользователей
					</Title>
					<div className={s.content}>
                        <ReviewsList reviews={reviews}/>
                        {limit <= count &&
                            <ButtonDefault
                                className={s.loadMore}
                                onClick={handleNavigateReviews}
                            >
                                Смотреть все
                            </ButtonDefault>
                        }
					</div>
				</div>
            ): null}
        </>
    )
}

export default Reviews
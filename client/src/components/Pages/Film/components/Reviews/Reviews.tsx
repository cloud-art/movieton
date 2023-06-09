import React, { useEffect, useState } from 'react'
import { fetchReviews } from '../../../../../http/filmApi';
import s from './Reviews.module.scss'
import { IReview } from '../../../../../types/IFilm';
import { Title } from '../../../../UI/Title/Title';
import ButtonDefault from '../../../../UI/ButtonDefault/ButtonDefault';
import Item from './components/Item';

type ReviewsProps = {
    movieId: number;
}

const Reviews:React.FC<ReviewsProps> = ({movieId}) => {
    const [reviews, setReviews] = useState<Array<IReview>>()
    const [count, setCount] = useState<number>(0)
    const [limit, setLimit] = useState<number>(3)

    useEffect(() => {
        fetchReviews(movieId, limit).then(reviews => {
            setReviews(reviews.rows)
            setCount(reviews.count)
        })
    }, [])

    const handleLoadReviews = () => {
        if (count <= limit){
            setLimit(limit => limit + 3)
            fetchReviews(movieId, limit).then(reviews => {
                setReviews(reviews.rows)
                setCount(reviews.count)
            })
        }
    }

    const Content = () => {
        return(
        <>
            {reviews?.map((review) => {
                return <Item key={review.id} review={review} />;
            })}
            {limit <= count &&
                <ButtonDefault
                    className={s.loadMore}
                    onClick={handleLoadReviews}
                >
                    Показать еще
                </ButtonDefault>
            }
        </>
        )
    }

    return (
        <>
            {reviews?.length? (
                <div className={s.container}>
					<Title variant="h2" className={s.title}>
						Рецензии пользователей
					</Title>
					<div className={s.content}>
                        <Content />
						{/* <ReviewsInfo limit={limit} /> */}
					</div>
				</div>
            ): null}
        </>
    )
}

export default Reviews
import React, { useEffect, useState } from 'react'
import { fetchReviews } from '../../../../../http/reviewApi';
import s from './Reviews.module.scss'
import { IReview } from '../../../../../types/IFilm';
import { Title } from '../../../../UI/Title/Title';
import ButtonDefault from '../../../../UI/ButtonDefault/ButtonDefault';
import { useNavigate } from 'react-router-dom';
import { REVIEWS_ROUTE } from '../../../../../utils/consts';
import ReviewsList from '../../../../ReviewsList/ReviewsList';
import AddReviewForm from './components/AddReviewForm/AddReviewForm';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';

type ReviewsProps = {
    movieId: number;
}

const Reviews:React.FC<ReviewsProps> = ({movieId}) => {
    const [reviews, setReviews] = useState<Array<IReview>>()
    const [count, setCount] = useState<number>(0)
    const [limit, setLimit] = useState<number>(3)
    const [isActiveForm, setActiveForm] = useState(false)
    const isAuth = useTypedSelector(state => state.userReducer.isAuth)
    const userId = useTypedSelector(state => state.userReducer.user.id)
    const navigate = useNavigate()

    const updateReviews = (movieId: number, limit: number) => {
        fetchReviews(movieId, limit).then(reviews => {
            setReviews(reviews.rows)
            setCount(reviews.count)
        })
    }

    useEffect(() => {
        updateReviews(movieId, limit)
    }, [])

    const handleNavigateReviews = () => {
        navigate(REVIEWS_ROUTE + `/${movieId}`)
    }

    const onAddClick = () => {
        setActiveForm(value => !value)
    }

    return (
        <div className={s.container}>
            <Title variant="h2" className={s.title}>
                Рецензии пользователей
            </Title>
            {isAuth && 
                <ButtonDefault 
                    className={s.addReview}
                    onClick={onAddClick}
                >
                    {!isActiveForm ? 'Написать рецензию' : 'Скрыть форму'}
                </ButtonDefault>
            }
            <div className={s.content}>
                <AddReviewForm 
                    classname={isActiveForm ? s.addFormActive : s.addForm} 
                    movieId={movieId} 
                    userId={userId} 
                    updateReviews={() => {
                            updateReviews(movieId, limit)
                            setActiveForm(false)
                        }
                    }
                />
                {reviews?.length? (
                <>
                    <ReviewsList reviews={reviews}/>
                    {limit <= count &&
                        <ButtonDefault
                            className={s.loadMore}
                            onClick={handleNavigateReviews}
                        >
                            Смотреть все
                        </ButtonDefault>
                    }
                </>
                ): <Title className={s.notFound}>Нет рецензий</Title>}
            </div>
        </div>
    )
}

export default Reviews
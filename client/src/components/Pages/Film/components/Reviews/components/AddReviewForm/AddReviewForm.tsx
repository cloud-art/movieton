import React, { useState } from 'react'
import { IReview } from '../../../../../../../types/IFilm';
import s from './AddFormReview.module.scss'
import ButtonDefault from '../../../../../../UI/ButtonDefault/ButtonDefault';
import { TextField } from '../../../../../../UI/TextField/TextField';
import { Title } from '../../../../../../UI/Title/Title';
import { createReview } from '../../../../../../../http/reviewApi';

type AddReviewFormProps = {
    movieId: number;
    userId: number;
    updateReviews: () => void;
    classname?: string;
}

const AddReviewForm:React.FC<AddReviewFormProps> = ({
    movieId,
    userId,
    updateReviews,
    classname,
}) => {
    const reviewInitialState: IReview = {
        title: '',
        positive: '',
        negative: '',
        filmId: 1,
        userId: 1,
    }
    const [review, setReview] = useState<IReview>(reviewInitialState)
    const onSubmit = (e: any) => {  
        e.preventDefault()
        if (review.title !== '' && review.negative !== '' && review.positive !== ''){
            createReview(movieId, userId, review).then(data => console.log(data)).then(() => updateReviews())
            setReview(reviewInitialState)
        }
    }
    console.log(userId)
    return (
        <div className={classname}>
            <Title className={s.title}>Написать отзыв</Title>
            {review && 
                <form className={s.form} onSubmit={onSubmit}>
                    <TextField 
                        label='Название'
                        value={review.title} 
                        className={s.input}
                        onChange={e => setReview({...review, title: e.target.value})}
                    />
                    <label className={s.label}>Положительные стороны</label>
                    <textarea 
                        value={review.positive} 
                        onChange={e => setReview({...review, positive: e.target.value})} 
                        className={s.positive}
                    />
                    <label className={s.label}>Отрицательные стороны</label>
                    <textarea 
                        value={review.negative} 
                        onChange={e => setReview({...review, negative: e.target.value})} 
                        className={s.negative}
                    />
                    <ButtonDefault 
                        type='submit' 
                        className={s.send}
                    >
                        Отправить
                    </ButtonDefault>
                </form>
            }
        </div>
    )
}

export default AddReviewForm
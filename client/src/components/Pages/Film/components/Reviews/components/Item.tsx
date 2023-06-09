import React from 'react'
import { IReview } from '../../../../../../types/IFilm'
import s from './Item.module.scss'

type ItemProps = {
    review: IReview;
}

const Item:React.FC<ItemProps> = ({
    review,
}) => {
  return (
    <div className={s.item}>
        <div className={s.top}>
            <div className={s.left}>
                <span className={s.user}>Пользователь {review.userId}</span>
                <span className={s.title}>{review.title}</span>
            </div>
        </div>
        <div className={s.content}>
            <span className={s.positive}>{review.positive}</span>
            <span className={s.negative}>{review.negative}</span>
        </div>
    </div>
  )
}

export default Item
import React from 'react'
import { IReview } from '../../../../types/IFilm';
import s from './Item.module.scss'
import ButtonDefault from '../../../UI/ButtonDefault/ButtonDefault';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { deleteReview } from '../../../../http/reviewApi';

type ItemProps = {
    review: IReview;
}

const Item:React.FC<ItemProps> = ({
    review,
}) => {
    const isAuth = useTypedSelector(state => state.userReducer.isAuth)
    const userRole = useTypedSelector(state => state.userReducer.user.role)

    const onDeleteClick = () => {
        review.id && deleteReview(review.id).then(data => console.log(data))
    }

    return (
    <div className={s.item}>
        <div className={s.top}>
            <div className={s.left}>
                <span className={s.user}>Пользователь {review.userId}</span>
                <span className={s.title}>{review.title}</span>
            </div>
        </div>
        <div className={s.content}>
            <span className={s.text}>{review.positive}</span>
        </div>
        {isAuth && userRole === 'ADMIN' &&
        <ButtonDefault 
            onClick={onDeleteClick}
            variant='delete' 
            className={s.delete}
        >
            Удалить
        </ButtonDefault>
        }
    </div>
    )
}

export default Item
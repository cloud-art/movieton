import React, { useState } from 'react'
import { IComment } from '../../../../../../../types/IFilm'
import s from './Item.module.scss'
import ButtonDefault from '../../../../../../UI/ButtonDefault/ButtonDefault';
import { deleteComment } from '../../../../../../../http/reviewApi';
import { useTypedSelector } from '../../../../../../../hooks/useTypedSelector';

type ItemProps = {
    comment: IComment;
}

const Item:React.FC<ItemProps> = ({
    comment,
}) => {
    const [date, setDate] = useState(new Date(comment.createdAt))

    const isAuth = useTypedSelector(state => state.userReducer.isAuth)
    const userRole = useTypedSelector(state => state.userReducer.user.role)

    const onDeleteClick = () => {
        comment.id && deleteComment(comment.id).then(data => console.log(data))
    }

    return (
        <div className={s.item}>
            <div className={s.top}>
                <span className={s.user}>Пользователь {comment.userId}</span>
                <span className={s.date}>{`${date.getUTCDate()}.${date.getMonth()}.${date.getFullYear()}`}</span>
            </div>
            <div className={s.content}>
                <span className={s.text}>{comment.text}</span>
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
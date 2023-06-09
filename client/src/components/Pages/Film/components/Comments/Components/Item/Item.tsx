import React, { useState } from 'react'
import { IComment } from '../../../../../../../types/IFilm'
import s from './Item.module.scss'

type ItemProps = {
    comment: IComment;
}

const Item:React.FC<ItemProps> = ({
    comment,
}) => {
    const [date, setDate] = useState(new Date(comment.createdAt))

    return (
        <div className={s.item}>
            <div className={s.top}>
                <span className={s.user}>Пользователь {comment.userId}</span>
                <span className={s.date}>{`${date.getUTCDate()}.${date.getMonth()}.${date.getFullYear()}`}</span>
            </div>
            <div className={s.content}>
                <span className={s.text}>{comment.text}</span>
            </div>
        </div>
    )
}

export default Item
import React, { FC } from 'react'
import s from './FilmItem.module.scss'

interface FilmItemProps {
    item: String;
}

export const FilmItem: FC<FilmItemProps> = ({item}) => {

    return (
        <div className={s.item}>{item}</div>
    )
}

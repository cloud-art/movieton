import classNames from 'classnames'
import React from 'react'
import s from "./FilmsList.module.scss"
import { useState } from 'react'
import ButtonDefault from '../../../../UI/ButtonDefault/ButtonDefault'
import { Title } from '../../../../UI/Title/Title'

interface FilmListProps {
    title: String
}

const FilmsList: React.FC<FilmListProps> = ({title}) => {
    const [data, setData] = useState(
        [{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}, {id: '5'}, {id: '6'}]
    )

    return (
        <div className={classNames(s.container)}>
            <div className={s.top}>
                <Title variant='h2'>{title}</Title>
                <ButtonDefault>Смотреть все</ButtonDefault>
            </div>
        </div>
    )
}

export default FilmsList
import classNames from 'classnames'
import React from 'react'
import s from "./FilmsList.module.scss"
import ButtonDefault from '../../../../UI/ButtonDefault/ButtonDefault'
import { Title } from '../../../../UI/Title/Title'
import { MovieSlider } from '../../../../MovieSlider/MovieSlider'
import { IFilm } from '../../../../../types/IFilm'

interface FilmListProps {
    title: String;
    films: Array<IFilm>;
}

const FilmsList: React.FC<FilmListProps> = ({
    title,
    films
}) => {
    return (
        <div className={classNames(s.container)}>
            <div className={s.top}>
                <Title variant='h2'>{title}</Title>
                <ButtonDefault>Смотреть все</ButtonDefault>
            </div>
            <div className={s.content}>
                <MovieSlider films={films} />
            </div>
        </div>
    )
}

export default FilmsList
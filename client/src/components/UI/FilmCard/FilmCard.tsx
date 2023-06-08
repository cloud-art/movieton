import React from 'react'
import s from './FilmCard.module.scss'
import classNames from 'classnames'
import PropertiesRow from './components/PropertiesRow'
import IFilmCard from '../../../types/IFilm'
import { Link } from 'react-router-dom'
import { FILM_ROUTE } from '../../../utils/consts'

type filmCardProps = {
    film: IFilmCard;
    classname?: string;
}

const FilmCard:React.FC<filmCardProps> = ({film, classname}) => {
  return (
    <Link className={classNames(s.card, classname)} to={FILM_ROUTE + `/${film.id}`}>
        <div className={s.imageSection}>
            <div className={s.imgWrapper}>
                <img className={s.img} src={film.img} />
            </div>
            <div className={s.properties}>
                <div className={s.inner}>
                    <PropertiesRow><div className={s.rating}>{film.rating}</div></PropertiesRow>
                    <div className={s.propertiesInfo}>
                        <PropertiesRow><div>{film.year}, {film.genre.title}</div></PropertiesRow>
                        <PropertiesRow><div>{film.duration}</div></PropertiesRow> 
                    </div>
                </div>
            </div>
        </div>
        <div className={s.textSection}>
            <span className={s.title}>{film.title}</span>
        </div>
    </Link>
  )
}

export default FilmCard
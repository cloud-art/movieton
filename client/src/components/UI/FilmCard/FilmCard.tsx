import React, { useState } from 'react'
import s from './FilmCard.module.scss'
import classNames from 'classnames'
import PropertiesRow from './components/PropertiesRow'
import IFilmCard from '../../../types/IFilm'
import { Link, useNavigate } from 'react-router-dom'
import { FILM_ROUTE } from '../../../utils/consts'
import Button from '../Button/Button'

type filmCardProps = {
    film: IFilmCard;
    classname?: string;
}

const FilmCard:React.FC<filmCardProps> = ({film, classname}) => {
    //Fixing react slick problem with dragging Link
    const [mouseMoved, setMouseMoved] = useState(false);
    const navigate = useNavigate()
    const handleClick = () => {
        if (!mouseMoved) navigate(FILM_ROUTE + `/${film.id}`)
    };
    //
  return (
    <Button 
        className={classNames(s.card, classname)}
        //fixing problem react-slick when using Link
        onMouseMove={() => setMouseMoved(true)}
        onMouseDown={() => setMouseMoved(false)}
        onMouseUp={() => handleClick()}
        //
    >
        <div className={s.imageSection}>
            <div className={s.imgWrapper}>
                <img className={s.img} src={process.env.REACT_APP_API_URL + film.img} />
            </div>
            <div className={s.properties}>
                <div className={s.inner}>
                    <PropertiesRow><div className={s.rating}>{film.rating}</div></PropertiesRow>
                    <div className={s.propertiesInfo}>
                        <PropertiesRow><div>{film.year}, {film.genre.title}</div></PropertiesRow>
                        <PropertiesRow><div>{`${film.duration} мин.`}</div></PropertiesRow> 
                    </div>
                </div>
            </div>
        </div>
        <div className={s.textSection}>
            <span className={s.title}>{film.title}</span>
        </div>
    </Button>
  )
}

export default FilmCard
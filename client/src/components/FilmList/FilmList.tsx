import React from 'react'
import { IFilm } from '../../types/IFilm'
import ListItem from './components/ListItem/ListItem';
import classNames from 'classnames';
import s from './FilmList.module.scss'

type FilmListProps = {
    films: Array<IFilm>;
    classname?: string;
}

const FilmList:React.FC<FilmListProps> = ({
    films,
    classname,
}) => {

    return (
        <>
            <ul className={classNames(s.list, classname)}>
                {films.map(film => {
                    return(
                        <ListItem film={{...film, img: process.env.REACT_APP_API_URL + film.img}}/>
                    )
                })}
            </ul>
        </>
        
    )
}

export default FilmList
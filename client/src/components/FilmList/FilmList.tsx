import React from 'react'
import { IFilmsInfo } from '../../types/IFilm'
import ListItem from './components/ListItem/ListItem';
import classNames from 'classnames';
import s from './FilmList.module.scss'
import { Title } from '../UI/Title/Title';

type FilmListProps = {
    filmsInfo: IFilmsInfo;
    classname?: string;
}

const FilmList:React.FC<FilmListProps> = ({
    filmsInfo,
    classname,
}) => {

    return (
        <>
        {filmsInfo.films.length ? 
            <ul className={classNames(s.list, classname)}>
                {filmsInfo.films.map(film => {
                    return(
                        <ListItem film={{...film, img: process.env.REACT_APP_API_URL + film.img}}/>
                    )
                })}
            </ul>  
        : <Title>Список пуст</Title>
        }
        </>
             
    )
}

export default FilmList
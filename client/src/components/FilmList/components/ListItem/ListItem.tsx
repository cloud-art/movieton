import React from 'react'
import { IFilm } from '../../../../types/IFilm'
import s from './ListItem.module.scss'
import { Title } from '../../../UI/Title/Title';
import { Link } from 'react-router-dom';
import { FILM_ROUTE } from '../../../../utils/consts';

type ListItemProps = {
    film: IFilm;
}

const ListItem:React.FC<ListItemProps> = ({
    film,
}) => {
  return (
    <li className={s.listItem}>
        <div className={s.imgWrapper}>
            <Link to={FILM_ROUTE + `/${film.id}`}>
                <img className={s.img} src={film.img} />
            </Link>
            <Title variant='h3'>{film.genres[0].title}</Title>
        </div>
        
        <div className={s.info}>
            <div className={s.top}>
                <Link to={FILM_ROUTE + `/${film.id}`}>
                    <Title variant='h2' className={s.title}>{film.title}</Title>
                </Link>
                <span className={s.rating}>{film.rating}</span>
            </div>
            <div className={s.bottom}>
                <span>{film.desc}</span>
            </div> 
        </div>
    </li>
  )
}

export default ListItem
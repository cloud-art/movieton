import React from 'react'
import { IFilm } from '../../../../types/IFilm'
import s from './SearchItem.module.scss'
import classNames from 'classnames';
import Rating from '../../../UI/Rating/Rating';
import { useNavigate } from 'react-router-dom';
import { FILM_ROUTE } from '../../../../utils/consts';

type SearchItemProps = {
    film: IFilm;
    classname?: string;
}

const SearchItem:React.FC<SearchItemProps> = ({
    film,
    classname,
}) => {
    const navigate = useNavigate()

    const onItemClick = () => {
        navigate(FILM_ROUTE + `/${film.id}`)
    }

    return (
        <div className={classNames(s.searchItem, classname)} onClick={onItemClick}>
            <div className={s.left}>
                <img 
                    className={s.image} 
                    src={process.env.REACT_APP_API_URL + film.img} 
                    alt={film.short_desc} 
                />
            </div>
            <div className={s.right}>
                <span className={s.title}>
                    {film.title}
                </span>
                <Rating value={film.rating}/>
            </div>
        </div>
  )
}

export default SearchItem
import React, { useEffect, useState } from 'react'
import s from './SearchList.module.scss'
import { fetchFilmsByName } from '../../../../http/filmApi';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useActions';
import SearchItem from '../SearchItem/SearchItem';
import { IFilm } from '../../../../types/IFilm';

type SearchListProps = {
    films: Array<IFilm>;
}

const SearchList:React.FC<SearchListProps> = ({
    films,
}) => {
    return (
        <div className={s.searchList}>
            {films && 
                <ul className={s.list}>
                    {films.map(film => {
                        return <SearchItem key={film.id} film={film} classname={s.searchItem}/>
                    })}
                </ul>
            }
        </div>
    )
}

export default SearchList
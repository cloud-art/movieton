import React, { useEffect, useState } from 'react'
import s from './SearchList.module.scss'
import { fetchFilmsByName } from '../../../../http/filmApi';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useActions';
import SearchItem from '../SearchItem/SearchItem';

type SearchListProps = {
    value: string;
}

const SearchList:React.FC<SearchListProps> = ({
    value,
}) => {
    const films = useTypedSelector(state => state.filmsReducer.films)
    const filters = useTypedSelector(state => state.filtersReducer)
    const { setFilms } = useActions()

    useEffect(() => {
        fetchFilmsByName(1, filters, value, 5).then(data => {
            setFilms(data)
        })
    }, [])

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
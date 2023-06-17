import React, { useEffect } from 'react';
import FiltersForm from '../../FiltersForm/FiltersForm';
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import s from './Search.module.scss';
import { useActions } from '../../../hooks/useActions';
import { fetchFilms, fetchFilmsByName } from '../../../http/filmApi';
import FilmsGrid from '../../FilmsGrid/FilmsGrid';
import Gallery from '../../Gallery/Gallery';
import { useParams } from 'react-router-dom';
import { Title } from '../../UI/Title/Title';

interface SearchProps {}

const Search: React.FunctionComponent<SearchProps> = () => {
    const filmsInfo = useTypedSelector(state => state.filmsReducer)
    const page = useTypedSelector(state => state.paginationReducer)
    const filters = useTypedSelector(state => state.filtersReducer)
    const { searchValue } = useParams()
    const { setFilms } = useActions()

    useEffect(() => {
        searchValue && fetchFilmsByName(page.page, filters, searchValue).then(data => {
            setFilms(data)
        })
    }, [])

    useEffect(() => {
        searchValue && fetchFilmsByName(page.page, filters, searchValue).then(data => {
            setFilms(data)
        })
    }, [page, filters])

    return (
        <div className={s.page}>
            <div className="container">
                <div className={s.container}>
                    <FiltersForm classname={s.filters}/>
                    <div className={s.content}>
                        {searchValue && <Title className={s.title}>Полученные результаты, по запросу: "{searchValue}"</Title>}
                        <Gallery filmsInfo={filmsInfo}>
                            <FilmsGrid films={filmsInfo.films}/>
                        </Gallery>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
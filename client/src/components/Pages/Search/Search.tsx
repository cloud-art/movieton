import React, { useEffect } from 'react';
import FiltersForm from '../../FiltersForm/FiltersForm';
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import s from './Search.module.scss';
import { useActions } from '../../../hooks/useActions';
import { fetchFilms, fetchFilmsByName } from '../../../http/filmApi';
import FilmsGrid from '../../FilmsGrid/FilmsGrid';
import Gallery from '../../Gallery/Gallery';

interface FilmsProps {}

const Search: React.FunctionComponent<FilmsProps> = () => {
    const filmsInfo = useTypedSelector(state => state.filmsReducer)
    const page = useTypedSelector(state => state.paginationReducer)
    const filters = useTypedSelector(state => state.filtersReducer)
    const name = 'Один'
    const { setFilms } = useActions()

    useEffect(() => {
        fetchFilmsByName(page.page, filters, name).then(data => {
            setFilms(data)
        })
    }, [])

    useEffect(() => {
        fetchFilmsByName(page.page, filters, name).then(data => {
            setFilms(data)
        })
    }, [page, filters])

    return (
        <div className={s.page}>
            <div className="container">
                <div className={s.container}>
                    <FiltersForm />
                    <div className={s.content}>
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
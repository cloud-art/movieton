import React, { useEffect } from 'react';
import FiltersForm from '../../FiltersForm/FiltersForm';
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import s from './Films.module.scss';
import { useActions } from '../../../hooks/useActions';
import { fetchFilms } from '../../../http/filmApi';
import FilmsGrid from '../../FilmsGrid/FilmsGrid';
import Gallery from '../../Gallery/Gallery';

interface FilmsProps {}

const Films: React.FunctionComponent<FilmsProps> = () => {
    const filmsInfo = useTypedSelector(state => state.filmsReducer)
    const page = useTypedSelector(state => state.paginationReducer)
    const filters = useTypedSelector(state => state.filtersReducer)
    const { setFilms } = useActions()

    useEffect(() => {
        fetchFilms(page.page, filters).then(data => {
            setFilms(data)
        })
    }, [])

    useEffect(() => {
        fetchFilms(page.page, filters).then(data => {
            setFilms(data)
        })
    }, [page, filters])

    return (
        <div className={s.Films}>
            <div className="container">
                <div className={s.container}>
                    <FiltersForm classname={s.filters}/>
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

export default Films;
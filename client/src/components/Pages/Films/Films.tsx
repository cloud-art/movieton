import React, { useEffect } from 'react';
import FiltersForm from '../../FiltersForm/FiltersForm';
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import s from './Films.module.scss';
import { useActions } from '../../../hooks/useActions';
import { fetchFilms } from '../../../http/filmApi';
import FilmsGrid from '../../FilmsGrid/FilmsGrid';

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
        console.log(filmsInfo)
        fetchFilms(page.page, filters).then(data => {
            setFilms(data)
        })
    }, [page])

    useEffect(() => {
        console.log(filters)
        fetchFilms(page.page, filters).then(data => {
            setFilms(data)
        })
    }, [filters])

    return (
        <div className={s.Films}>
            <div className="container">
                <div className={s.container}>
                    <FiltersForm />
                    <div className={s.content}>
                        <FilmsGrid filmsInfo={filmsInfo} isLoading={filmsInfo.isLoading} isFetching={filmsInfo.isFetching}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Films;
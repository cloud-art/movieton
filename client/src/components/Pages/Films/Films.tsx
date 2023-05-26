import React, { useEffect } from 'react';
import FiltersForm from '../../FiltersForm/FiltersForm';
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import s from './Films.module.scss';
import { useActions } from '../../../hooks/useActions';
import { fetchFilms } from '../../../http/filmApi';
import ButtonDefault from '../../UI/ButtonDefault/ButtonDefault';
import FilmsGrid from '../../FilmsGrid/FilmsGrid';

interface FilmsProps {}

const Films: React.FunctionComponent<FilmsProps> = () => {
    const films = useTypedSelector(state => state.filmsReducer)
    const { setFilms } = useActions()

    useEffect(() => {
        fetchFilms().then(data => {
            setFilms(data)
        })
    }, [])

    return (
        <div className={s.Films}>
            <div className="container">
                <div className={s.container}>
                    <FiltersForm />
                    <div className={s.content}>
                        <FilmsGrid data={films}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Films;
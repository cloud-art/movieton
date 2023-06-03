import React, { FC, useEffect, useState } from 'react'
import s from './FilmsGrid.module.scss'
import { IFilmsInfo } from '../../types/IFilm'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import Grid from './components/Grid/Grid';
import Pagination from './components/Pagination/Pagination';
import { Title } from '../UI/Title/Title';
import LoadSpinner from '../UI/LoadSpinner/LoadSpinner';
import { IPage } from '../../types/IPage';

interface FilmGridProps {
    data: IFilmsInfo;
    isLoading: boolean;
    isFetching: boolean;
}

const FilmsGrid: FC<FilmGridProps> = ({data, isLoading, isFetching}) => {
    const page:IPage = useTypedSelector((state) => state.paginationReducer);
    const { setPage } = useActions();
    const [pages, setPages] = useState(1)
    
    useEffect(() => {
        setPages(Math.ceil(data.count/page.offset))
    }, [data])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    return (
        <>
            {isLoading || isFetching ? (
                <LoadSpinner />
            ) : (
                <div className={s.content}>
                    {!data.films.length ? 
                    <Title className={s.subtitle} variant="h2">
                        Ничего не найдено!
                    </Title> 
                    : 
                    <div className={s.gridWrapper}>
                        <Grid data={data} />
                        <Pagination page={page.page} setPage={setPage} pages={pages} />
                    </div>
                    }
                </div>
            )}
        </>
    );
}

export default FilmsGrid

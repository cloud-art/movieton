import React, { FC, useEffect } from 'react'
import s from './FilmsGrid.module.scss'
import { IFilmsInfo } from '../../types/IFilm'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import Grid from './components/Grid/Grid';
import Pagination from './components/Pagination/Pagination';
import { Title } from '../UI/Title/Title';
import LoadSpinner from '../UI/LoadSpinner/LoadSpinner';

interface FilmGridProps {
    data: IFilmsInfo;
    isLoading?: boolean;
    isFetching?: boolean;
}

const FilmsGrid: FC<FilmGridProps> = ({data, isLoading, isFetching}) => {
    const { page } = useTypedSelector((state) => state.paginationReducer);
    const { setPage } = useActions();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    const CatalogContent = (
        <>
            <Grid data={data} />
            <Pagination page={page} setPage={setPage} pages={data.count} />
        </>
    );

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
                    : CatalogContent
                    }
                </div>
            )}
        </>
    );
}

export default FilmsGrid

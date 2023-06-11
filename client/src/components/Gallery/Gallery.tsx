import React, { useEffect, useState } from 'react'
import s from './Gallery.module.scss'
import { IFilmsInfo } from '../../types/IFilm'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import Pagination from '../Pagination/Pagination';
import { IPage } from '../../types/IPage';

interface GalleryProps {
    filmsInfo: IFilmsInfo
}

const Gallery: React.FC<React.PropsWithChildren<GalleryProps>> = ({filmsInfo, children}) => {
    const page:IPage = useTypedSelector((state) => state.paginationReducer);
    const { setPage } = useActions();
    const [pages, setPages] = useState(1)
    
    useEffect(() => {
        setPages(Math.ceil(filmsInfo.count/page.offset))
    }, [filmsInfo])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    return (
        <div className={s.content}>
            <div className={s.gallery}>
                {children}
                <Pagination page={page.page} setPage={setPage} pages={pages} />
            </div>
        </div>
    );
}

export default Gallery

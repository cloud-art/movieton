import React from 'react';
import FilmsList from './components/FilmList/FilmsList';
import s from './Homepage.module.scss';
import PromoSlider from '../../UI/PromoSlider/PromoSlider';

function Homepage() {
    const cards = [
        {
            id: 1,
            img: 'https://thumbs.dfs.ivi.ru/storage37/contents/0/a/1d3381c9a1549a24212f58b8c2495b.jpg/1216x524/?q=85',
            title: 'Название',
            desc: 'описание описание описание описание описание описание описаниеописание описание описание описание описание',
        },
        {
            id: 2,
            img: 'https://thumbs.dfs.ivi.ru/storage37/contents/0/a/1d3381c9a1549a24212f58b8c2495b.jpg/1216x524/?q=85',
            title: 'Название',
            desc: 'описание описание описание описание описание описание описаниеописание описание описание описание описание',
        },
        {
            id: 3,
            img: 'https://thumbs.dfs.ivi.ru/storage37/contents/0/a/1d3381c9a1549a24212f58b8c2495b.jpg/1216x524/?q=85',
            title: 'Название',
            desc: 'описание описание описание описание описание описание описаниеописание описание описание описание описание',
        },
        {
            id: 4,
            img: 'https://thumbs.dfs.ivi.ru/storage37/contents/0/a/1d3381c9a1549a24212f58b8c2495b.jpg/1216x524/?q=85',
            title: 'Название',
            desc: 'описание описание описание описание описание описание описаниеописание описание описание описание описание',
        },
    ]

    return (
        <div className={s.Homepage}>
                <PromoSlider data={cards} classname={s.promoSlider}></PromoSlider>
            <div className="container">  
                <FilmsList title={'Фильмы'}></FilmsList>
                <FilmsList title={'Сериалы'}></FilmsList>
            </div>
        </div>
    );
}

export default Homepage;

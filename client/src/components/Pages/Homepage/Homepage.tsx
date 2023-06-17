import React, { useEffect, useState } from 'react';
import FilmsList from './components/FilmList/FilmsList';
import s from './Homepage.module.scss';
import PromoSlider from '../../PromoSlider/PromoSlider';
import { fetchFilms } from '../../../http/filmApi';
import { IFilm } from '../../../types/IFilm';

function Homepage() {
    const cards = [
        {
            id: 21,
            img: process.env.REACT_APP_API_URL + 'JohnUik.jpg',
            title: 'Джон Уик',
            desc: 'Чтобы обрести свободу, киллер-изгой бросает вызов Правлению кланов. Самая зрелищная часть стильной экшен-саги',
        },
        {
            id: 22,
            img: process.env.REACT_APP_API_URL + 'Nasledniki.jpg',
            title: 'Наследники',
            desc: 'Кто возглавит самую крупную медиакорпорацию в мире? Финал главной драмы современности',
        },
        {
            id: 25,
            img: process.env.REACT_APP_API_URL + 'Proklyatie.jpg',
            title: 'Проклятие. Посвящение',
            desc: 'Грейс расследует загадочное самоубийство брата-священника. Британский хоррор о тайнах женского монастыря',
        }
    ]

    const [filmsList, setFilmsList] = useState<Array<IFilm>>([])

    useEffect(() => {
        fetchFilms(1).then(films => setFilmsList(films.rows))
    }, [])

    return (
        <div className={s.Homepage}>
                <PromoSlider data={cards} classname={s.promoSlider}></PromoSlider>
            <div className="container">  
                <FilmsList films={filmsList} title={'Фильмы'}></FilmsList>  
                {/* <FilmsList title={'Сериалы'}></FilmsList> */}
            </div>
        </div>
    );
}

export default Homepage;

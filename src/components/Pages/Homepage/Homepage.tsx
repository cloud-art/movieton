import React from 'react';
import FilmsList from './components/FilmList/FilmsList';
import s from './Homepage.module.scss';

function Homepage() {
    return (
        <div className={s.Homepage}>
            <div className="container">
                <span>Homepage</span>
                <FilmsList title={'Фильмы'}></FilmsList>
                <FilmsList title={'Сериалы'}></FilmsList>
            </div>
        </div>
    );
}

export default Homepage;

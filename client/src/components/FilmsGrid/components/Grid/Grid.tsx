import React from "react";
import { IFilm, IFilmsInfo } from "../../../../types/IFilm";
import s from './Grid.module.scss'
import FilmCard from "../../../UI/FilmCard/FilmCard";

interface GridProps {
    films: Array<IFilm>;
}

const Grid: React.FC<GridProps> = ({ films }) => {

    return (
        <div className={s.grid}>
            {films.map((el) => (
                <FilmCard key={el.id} film={
                    { 
                        id: el.id,
                        title: el.title,
                        rating: el.rating,
                        genre: el.genres[0],
                        duration: el.duration + ' мин.',
                        year: new Date(el.date).getFullYear(),
                        img: process.env.REACT_APP_API_URL + el.img
                    }
                }
                classname={s.card}/>
            ))}
        </div>
    );
};

export default Grid
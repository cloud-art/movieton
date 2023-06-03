import React from "react";
import { IFilmsInfo } from "../../../../types/IFilm";
import s from './Grid.module.scss'
import FilmCard from "../../../UI/FilmCard/FilmCard";
import IFilmCard from "../../../../types/IFilmCard";

interface GridProps {
    data: IFilmsInfo;
}

const Grid: React.FC<GridProps> = ({ data }) => {
    return (
        <div className={s.grid}>
            {data.films.map((el) => (
                <FilmCard key={el.id} data={{id: el.id? el.id : 1, title: el.title, img: process.env.REACT_APP_API_URL + el.img}}
                classname={s.card}/>
            ))}
        </div>
    );
};

export default Grid
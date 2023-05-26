import React from "react";
import { IFilmsInfo } from "../../../../types/IFilm";
import s from './Grid.module.scss'

interface GridProps {
    data: IFilmsInfo;
}

const Grid: React.FC<GridProps> = ({ data }) => {
    return (
        <div className={s.grid}>
            {data.films.map((el) => (
                // <MovieItem key={el.id} item={el} />
                el.id
            ))}
        </div>
    );
};

export default Grid
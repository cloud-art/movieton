import { useEffect, useState } from 'react';
import s from './Favourite.module.scss';
import { fetchFavourite } from '../../../http/filmApi';
import { useParams } from 'react-router-dom';
import FilmsGrid from '../../FilmsGrid/FilmsGrid';
import { IFilmsInfo } from '../../../types/IFilm';
import FilmList from '../../FilmList/FilmList';
import { Title } from '../../UI/Title/Title';

interface FavouriteProps {}

const Favourite: React.FunctionComponent<FavouriteProps> = () => {
    const [favourites, setFavourites] = useState<IFilmsInfo>()
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const {id: userId} = useParams()

    useEffect(() => {
        userId && fetchFavourite(parseInt(userId)).then(favourite => {
            setFavourites(
                {
                    count: favourite.filmsCount,
                    films: favourite.favouriteFilms.map((el: { film: any; }) => {return el.film})
                } 
            )  
        })
    }, [])

    return (
        <div className={s.Films}>
            <div className="container">
                <div className={s.container}>
                    <Title className={s.title} isBold={true}>Список избранного</Title>
                    {favourites && 
                        <FilmList films={favourites.films} classname={s.filmList}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default Favourite;

import { useEffect, useState } from 'react';
import s from './Favourite.module.scss';
import { fetchFavourite } from '../../../http/filmApi';
import { useParams } from 'react-router-dom';
import { IFilmsInfo } from '../../../types/IFilm';
import FilmList from '../../FilmList/FilmList';
import { Title } from '../../UI/Title/Title';
import { IPage } from '../../../types/IPage';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Gallery from '../../Gallery/Gallery';

interface FavouriteProps {}

const Favourite: React.FunctionComponent<FavouriteProps> = () => {
    const [favourites, setFavourites] = useState<IFilmsInfo>()
    const userId = useTypedSelector(state => state.userReducer.user.id)
    const user = useTypedSelector(state => state.userReducer)

    useEffect(() => {
        console.log(user)
        userId && fetchFavourite(userId, page.page, page.offset).then(favourite => {
            setFavourites(
                {
                    count: favourite.count,
                    films: favourite.rows.map((el: { film: any; }) => {return el.film})
                } 
            )  
        })
        
    }, [])

    //pagination
    const page:IPage = useTypedSelector((state) => state.paginationReducer);

    useEffect(() => {
        window.scrollTo(0, 0);
        userId && fetchFavourite(userId, page.page, page.offset).then(favourite => {
            setFavourites(
                {
                    count: favourite.count,
                    films: favourite.rows.map((el: { film: any; }) => {return el.film})
                }
            )  
        })
    }, [page]);

    return (
        <div className="container">
            <div className={s.container}>
                <Title className={s.title} isBold={true}>Список избранного</Title>
                {favourites ?
                    <Gallery filmsInfo={favourites}>
                        <FilmList classname={s.filmList} filmsInfo={favourites}/>
                    </Gallery>
                : <Title className={s.empty}>Список пуст</Title>
                }
            </div>
        </div>
    );
};

export default Favourite;

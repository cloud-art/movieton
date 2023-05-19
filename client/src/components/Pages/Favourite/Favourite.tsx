import s from './Favourite.module.scss';

interface FavouriteProps {}

const Favourite: React.FunctionComponent<FavouriteProps> = () => {
    return (
        <div className={s.Favourite}>
            <div className="container">
                <span>Favourite</span>
            </div>
        </div>
    );
};

export default Favourite;

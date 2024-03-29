import { FAVOURITE_ROUTE, FILMS_ROUTE, SERIES_ROUTE } from '../../utils/consts';
import { Link } from 'react-router-dom';
import Logo from '../UI/Logo/Logo';
import s from './Footer.module.scss';
import classNames from 'classnames';

interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
    const items = [
        {
            href: FILMS_ROUTE,
            text: 'Фильмы'
        },
        // {
        //     href: SERIES_ROUTE,
        //     text: 'Сериалы'
        // },
        {
            href: FAVOURITE_ROUTE,
            text: 'Избранное'
        }
    ];

    return (
        <footer className={s.Footer}>
            <div className={classNames('container', s.container)}>
                <Logo />
                <ul className={s.list}>
                    {items.map((el) => {
                        return (
                            <li key={el.text} className={s.item}>
                                <Link to={el.href} className={s.link}>
                                    {el.text}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <span className={s.author}>by @cloud-art</span>
            </div>
        </footer>
    );
};

export default Footer;

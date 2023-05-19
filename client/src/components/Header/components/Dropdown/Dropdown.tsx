import classNames from 'classnames';
import { HOMEPAGE_ROUTE, FILMS_ROUTE, SERIES_ROUTE, FAVOURITE_ROUTE } from '../../../../utils/consts';
import { FiHome, FiHeart, FiFilm, FiPlayCircle } from 'react-icons/fi';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import s from './Dropdown.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useActions } from '../../../../hooks/useActions';

interface DropdownProps {}

const Dropdown: React.FunctionComponent<DropdownProps> = () => {
    const items = [
        {
            icon: <FiHome />,
            href: HOMEPAGE_ROUTE,
            text: 'Главная'
        },
        {
            icon: <FiFilm />,
            href: FILMS_ROUTE,
            text: 'Полнометражки'
        },
        {
            icon: <FiPlayCircle />,
            href: SERIES_ROUTE,
            text: 'Сериалы'
        },
        {
            icon: <FiHeart />,
            href: FAVOURITE_ROUTE,
            text: 'Избранное'
        }
    ];

    let location = useLocation();
    const { toggleMenu } = useActions();

    useEffect(() => {
        toggleMenu(false);
    }, [location]);

    const { openedMenu } = useTypedSelector((state) => state.toggleReducer);
    return (
        <div className={classNames(s.dropdown, openedMenu && s.dropdownOpen)}>
            <div className={classNames(s.list)}>
                {items.map((el) => {
                    return (
                        <li key={el.text} className={s.item}>
                            <Link to={el.href} className={s.link}>
                                {el.icon}
                                {el.text}
                            </Link>
                        </li>
                    );
                })}
            </div>
        </div>
    );
};

export default Dropdown;

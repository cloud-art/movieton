import Burger from './components/Burger/Burger';
import Logo from '../UI/Logo/Logo';
import classNames from 'classnames';
import s from './Header.module.scss';
import Dropdown from './components/Dropdown/Dropdown';
import { useActions } from '../../hooks/useActions';
import { useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../utils/consts';
import Search from '../Search/Search';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import ButtonDefault from '../UI/ButtonDefault/ButtonDefault';

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
    const { toggleMenu } = useActions();
    const user = useTypedSelector(state => state.userReducer)
    const dropDownRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(dropDownRef, () => toggleMenu(false));

    return (
        <header className={s.Header}>
            <div className={classNames(s.container, 'container')}>
                <div ref={dropDownRef} className={s.left}>
                    <Burger />
                    <Dropdown />
                    <Logo />
                </div>
                <Search />
                {!user.isAuth ?
                <Link to={LOGIN_ROUTE} className={s.link}>
                    <span>Войти</span>
                </Link>
                : <ButtonDefault>Выйти</ButtonDefault>
                }

            </div>
        </header>
    );
};

export default Header;

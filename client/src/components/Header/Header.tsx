import Burger from './components/Burger/Burger';
import Logo from '../UI/Logo/Logo';
import classNames from 'classnames';
import s from './Header.module.scss';
import Dropdown from './components/Dropdown/Dropdown';
import { useActions } from '../../hooks/useActions';
import { useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { Link } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE } from '../../utils/consts';
import Search from '../Search/Search';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Button from '../UI/Button/Button';

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
    const { toggleMenu } = useActions();
    const user = useTypedSelector(state => state.userReducer)
    const {setUser, setAuth} = useActions()
    const dropDownRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(dropDownRef, () => toggleMenu(false));

    const handleExit = () => {
        setUser({}); 
        setAuth(false); 
        localStorage.setItem('token', '')
        console.log(user);
    }

    return (
        <header className={s.Header}>
            <div className={classNames(s.container, 'container')}>
                <div ref={dropDownRef} className={s.left}>
                    <Burger />
                    <Dropdown />
                    <Logo />
                </div>
                <Search />
                <div className={s.buttons}>
                    {user.isAuth && user.user.role === 'ADMIN' &&
                        <Link 
                            to={ADMIN_ROUTE}
                            className={s.link}
                        >
                            Админ панель
                        </Link>
                    }
                    
                    {!user.isAuth ?
                        <Link 
                            to={LOGIN_ROUTE} 
                            className={s.link}
                        >
                            <span>Войти</span>
                        </Link>
                    :   <Button 
                            onClick={handleExit} 
                            className={s.link}
                        >
                            Выйти
                        </Button>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;

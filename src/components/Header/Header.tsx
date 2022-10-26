import Burger from './components/Burger/Burger';
import Logo from '../Logo/Logo';
import classNames from 'classnames';
import s from './Header.module.scss';
import Dropdown from './components/Dropdown';
import { useActions } from '../../hooks/useActions';

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
    const { toggleMenu } = useActions();
    return (
        <header className={s.Header}>
            <div className={classNames(s.container, 'container')}>
                <div className={s.left}>
                    <Burger />
                    <Dropdown />
                    <Logo />
                </div>
                <div>Search</div>
                <div>Enter</div>
            </div>
        </header>
    );
};

export default Header;

import Burger from './components/Burger/Burger';
import Button from '../Button/Button';
import classNames from 'classnames';
import s from './Header.module.scss';
import Dropdown from './components/Dropdown';

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
    return (
        <header className={s.Header}>
            <div className={classNames(s.container, 'container')}>
                <div className={s.left}>
                    <Burger />
                    <Dropdown />
                    <div>Logo</div>
                </div>
                <div>Search</div>
                <div>Enter</div>
            </div>
        </header>
    );
};

export default Header;

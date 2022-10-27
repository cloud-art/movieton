import Burger from './components/Burger/Burger';
import Logo from '../Logo/Logo';
import classNames from 'classnames';
import s from './Header.module.scss';
import Dropdown from './components/Dropdown';
import { useActions } from '../../hooks/useActions';
import { useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
    const { toggleMenu } = useActions();
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
                <div>Search</div>
                <div>Enter</div>
            </div>
        </header>
    );
};

export default Header;

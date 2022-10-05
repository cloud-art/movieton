import classNames from 'classnames';
import s from './Header.module.scss';

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
    return (
        <header className={s.Header}>
            <div className={classNames('container', s.container)}>
                <div>
                    <div>Logo</div>
                    <div>Menu</div>
                    <div>Dropdown</div>
                </div>
                <div>Search</div>
                <div>Enter</div>
            </div>
        </header>
    );
};

export default Header;

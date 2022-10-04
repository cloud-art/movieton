import s from './Header.module.css';
import '../../styles/global.scss';

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
    return (
        <header className={s.Header}>
            <div className="container">header</div>
        </header>
    );
};

export default Header;

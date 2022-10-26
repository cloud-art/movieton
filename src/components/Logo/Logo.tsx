import s from './Logo.module.scss';
import logoImage from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { HOMEPAGE_ROUTE } from '../../utils/consts';

interface LogoProps {}

const Logo: React.FunctionComponent<LogoProps> = () => {
    return (
        <Link to={HOMEPAGE_ROUTE} className={s.logo}>
            <img src={logoImage} alt="Movieton" />
        </Link>
    );
};

export default Logo;

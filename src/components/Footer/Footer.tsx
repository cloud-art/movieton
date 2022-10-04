import s from './Footer.module.css';
import '../../styles/global.scss';

interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
    return (
        <div className={s.Footer}>
            <div className="container">
                <h1>Footer</h1>
            </div>
        </div>
    );
};

export default Footer;

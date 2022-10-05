import s from './Footer.module.scss';

interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
    return (
        <div className={s.Footer}>
            <div className="container">
                <span className={s.tmp}>Footer</span>
            </div>
        </div>
    );
};

export default Footer;

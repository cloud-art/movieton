import s from './Series.module.scss';

interface SeriesProps {}

const Series: React.FunctionComponent<SeriesProps> = () => {
    return (
        <div className={s.Series}>
            <div className="container">
                <span>Series</span>
            </div>
        </div>
    );
};

export default Series;

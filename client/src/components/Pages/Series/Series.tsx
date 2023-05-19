import FiltersForm from '../../FiltersForm/FiltersForm';
import s from './Series.module.scss';

interface SeriesProps {}

const Series: React.FunctionComponent<SeriesProps> = () => {
    return (
        <div className={s.Series}>
            <div className="container">
                <div className={s.container}>
                    <FiltersForm />
                    <div className={s.content}>Content</div>
                </div>
            </div>
        </div>
    );
};

export default Series;

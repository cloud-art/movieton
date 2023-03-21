import FiltersForm from '../../FiltersForm/FiltersForm';
import s from './Films.module.scss';

interface FilmsProps {}

const Films: React.FunctionComponent<FilmsProps> = () => {
    return (
        <div className={s.Films}>
            <div className="container">
                <span>Films</span>
                <FiltersForm />
            </div>
        </div>
    );
};

export default Films;

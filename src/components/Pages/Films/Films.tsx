import FiltersForm from '../../FiltersForm/FiltersForm';
import s from './Films.module.scss';

interface FilmsProps {}

const Films: React.FunctionComponent<FilmsProps> = () => {
    return (
        <div className={s.Films}>
            <div className="container">
                <div className={s.container}>
                    <FiltersForm />
                    <div className={s.content}>Content</div>
                </div>
            </div>
        </div>
    );
};

export default Films;

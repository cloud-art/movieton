import s from './Films.module.scss';

interface FilmsProps {}

const Films: React.FunctionComponent<FilmsProps> = () => {
    return (
        <div className={s.Films}>
            <div className="container">
                <span>Films</span>
            </div>
        </div>
    );
};

export default Films;

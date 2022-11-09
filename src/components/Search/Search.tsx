import s from './Search.module.scss';
import { FiX, FiSearch, FiChevronLeft } from 'react-icons/fi';
import Button from '../Button/Button';
import InputText from '../InputText/InputText';

interface SearchProps {}

const Search: React.FunctionComponent<SearchProps> = () => {
    return (
        <div className={s.Search}>
            <form action="" className={s.form}>
                <InputText />
                <Button className={s.searchButton}>
                    <FiSearch />
                </Button>
            </form>
            <Button className={s.showSearch}>
                <FiSearch />
            </Button>
        </div>
    );
};

export default Search;

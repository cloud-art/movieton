import s from './Search.module.scss';
import { FiX, FiSearch } from 'react-icons/fi';
import Button from '../Button/Button';
import InputText from '../InputText/InputText';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

interface SearchProps {}

const Search: React.FunctionComponent<SearchProps> = () => {
    const [value, setValue] = useState<string>('');
    let page = useNavigate();

    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleClearInput = () => {
        setValue('');
    };

    useEffect(() => {
        setValue('');
    }, [page]);

    return (
        <div className={s.Search}>
            <form action="" className={s.form}>
                <InputText variant="light" value={value} onChange={onChangeHandle} placeholder="Поиск..." type="search" />
                <Button type="button" className={classNames(s.closeButton, value && s.active)} onClick={handleClearInput}>
                    <FiX />
                </Button>
                <Button type="button" className={s.searchButton}>
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

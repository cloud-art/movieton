import s from './Search.module.scss';
import { FiX, FiSearch, FiChevronLeft } from 'react-icons/fi';
import Button from '../Button/Button';
import InputText from '../InputText/InputText';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import classNames from 'classnames';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import useOnClickOutside from '../../hooks/useOnClickOutside';

interface SearchProps {}

const Search: React.FunctionComponent<SearchProps> = () => {
    const [value, setValue] = useState<string>('');
    const { setSearch, setVisible } = useActions();
    const { visible } = useTypedSelector((state) => state.searchReducer);
    const inputRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    let page = useNavigate();

    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const submitForm = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        setSearch(value);
        //Router redirect on search page
    };

    const handleClearInput = () => {
        setValue('');
        setVisible(false);
    };

    const openSearch = () => {
        setVisible(true);
        inputRef.current?.focus();
    };

    useOnClickOutside(formRef, () => setVisible(false));

    useEffect(() => {
        setValue('');
    }, [page]);

    return (
        <>
            <form onSubmit={submitForm} ref={formRef} className={classNames(s.form, visible && s.visible)}>
                <InputText ref={inputRef} className={s.search} variant={visible ? 'dark' : 'light'} value={value} onChange={onChangeHandle} placeholder="Поиск..." type="search" />
                <Button type="button" className={s.hideSearch} onClick={() => setVisible(false)}>
                    <FiChevronLeft />
                </Button>
                <Button type="button" className={classNames(s.closeButton, value && s.active)} onClick={handleClearInput}>
                    <FiX />
                </Button>
                <Button type="button" className={s.searchButton}>
                    <FiSearch />
                </Button>
            </form>
            <Button className={s.showSearch} onClick={openSearch}>
                <FiSearch />
            </Button>
        </>
    );
};

export default Search;

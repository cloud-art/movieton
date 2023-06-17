import s from './Search.module.scss';
import { FiX, FiSearch, FiChevronLeft } from 'react-icons/fi';
import Button from '../UI/Button/Button';
import InputText from '../UI/InputText/InputText';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { SEARCH_ROUTE } from '../../utils/consts';
import SearchList from './components/SearchList/SearchList';
import { fetchFilmsByName } from '../../http/filmApi';
import { IFilm } from '../../types/IFilm';
import { useActions } from '../../hooks/useActions';

interface SearchProps {}

const Search: React.FunctionComponent<SearchProps> = () => {
    const [value, setValue] = useState<string>('');
    const [visible, setVisible] = useState(false);
    const [films, setFilms] = useState<Array<IFilm> | null>()
    const filters = useTypedSelector(state => state.filtersReducer)
    const { setSearch } = useActions()
    const inputRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    let navigate = useNavigate();

    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const submitForm = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        if (value != ''){
            setSearch(value)
            setVisible(false)
            navigate(SEARCH_ROUTE)
        }
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
        fetchFilmsByName(1, filters, value, 5).then(data => {
            setFilms(data.rows)
        })
    }, [])

    useEffect(() => {
		fetchFilmsByName(1, filters, value, 5).then(data => {
            setFilms(data.rows)
        })
	}, [value]);

    useEffect(() => {
        setValue('');
        setVisible(false)
    }, [navigate]);

    return (
        <>
            <form 
                onSubmit={submitForm} 
                ref={formRef} 
                className={classNames(s.form, visible && s.visible)}
            >
                <InputText 
                    ref={inputRef} 
                    className={s.search} 
                    // variant={visible ? 'dark' : 'light'} 
                    value={value} 
                    onChange={onChangeHandle} 
                    onClick={() => setVisible(true)}
                    placeholder="Поиск..." 
                    type="search" 
                />
                <Button 
                    type="button" 
                    className={s.hideSearch} 
                    onClick={() => setVisible(false)}
                >
                    <FiChevronLeft />
                </Button>
                <Button 
                    type="button" 
                    className={classNames(s.closeButton, value && s.active)} 
                    onClick={handleClearInput}
                >
                    <FiX />
                </Button>
                <Button 
                    type="button" 
                    onClick={submitForm} 
                    className={s.searchButton}
                >
                    <FiSearch />
                </Button>
                {visible && films && <SearchList films={films}/>}
            </form>
            <Button 
                className={s.showSearch} 
                onClick={openSearch}
            >
                <FiSearch />
            </Button>
        </>
    );
};

export default Search;

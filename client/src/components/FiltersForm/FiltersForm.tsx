import React, { useEffect, useState } from 'react'
import s from './FiltersForm.module.scss'
import { useActions } from '../../hooks/useActions'
import { Controller, useForm } from 'react-hook-form'
import { Title } from '../UI/Title/Title'
import ButtonDefault from '../UI/ButtonDefault/ButtonDefault'
import { Slider } from '../UI/Slider/Slider'
import { Select } from '../UI/Select/Select'
import years, { sortBy } from './FiltersConsts'
import { Filter } from './components/Filter'
import classNames from 'classnames'
import { fetchGenres } from '../../http/filmApi'

interface FiltersFormProps{
    classname?: string;
}

const FiltersForm:React.FunctionComponent<FiltersFormProps> = ({
    classname,
}) => {
    const { toggleFilters } = useActions()
    const {setPage, setFilterGenre, setFilterRating, setFilterRatingLower, setFilterRatingUpper, setFiterYear, setSortType, resetFilters} = useActions()

    const [genres, setGenres] = useState<Array<{label: string, value: string}>>([{label: 'Все жанры', value: ''}])

    const { handleSubmit, control, getValues, reset } = useForm({
        defaultValues: {
            sort: sortBy[0],
            genres: genres[0],
            rating: [1, 10],
            year: years[0]
        }
    })

    useEffect(() => {
        fetchGenres().then(data => setGenres(
            [
                ...genres, 
                ...data.map((genre: any) => {
                    return {label: genre.title, value: genre.id}
                })
            ]
        ))
    }, [])

    const onSubmit = handleSubmit((data) => {
        const { sort, rating, year, genres } = data;

		const ratingString = `${rating[0]}-${rating[1]}`;
		// const yearString = `${year[0]}-${year[1]}`;
		const ratings = rating[0] !== rating[1] ? ratingString : rating[0];
		// const years = year[0] !== year[1] ? yearString : year[0];
		const genre = genres.value !== '' ? `search[]=${genres.value}&field[]=genres.name` : '';

		setPage(1);
		setFilterRatingLower(rating[0]);
		setFilterRatingUpper(rating[1]);
		setFiterYear(year.value);
		setSortType(sort.value);
		setFilterGenre(genres.value);
        console.log('submit')
    })

    const handleReset = () => {
        resetFilters()
        reset()
    }

    useEffect(() => {
        handleReset()
    }, [])

    return (
        <form 
            action="#"
            onSubmit={onSubmit}
            className={classNames(s.filters, classname)}
        >
            <div className={s.main}>
                <Controller
                    name="rating"
                    control={control}
                    render = {({field: {value, onChange}}) => {
                        return (
                            <Filter title="Рейтинг:">
                                <Slider values={value} min={1} max={10} onChange={onChange} step={1}/>
                            </Filter>
                            
                        )
                    }}
                />
                <Controller
                    name="year"
                    control={control}
                    render = {({field: {value, onChange}}) => {
                        return (
                            <Filter title="Год выхода:">
                                <Select 
                                    value={value}
                                    onChange={onChange}
                                    name="year"
                                    options={years}
                                />
                            </Filter>
                            
                        )
                    }}
                />
                <Controller
                    name="genres"
                    control={control}
                    render = {({field: {value, onChange}}) => {
                        return (
                            <Filter title="Жанр:">
                                <Select 
                                    value={value}
                                    onChange={onChange}
                                    name="genres"
                                    options={genres}
                                />
                            </Filter>
                            
                        )
                    }}
                />
                <Controller
                    name="sort"
                    control={control}
                    render = {({field: {value, onChange}}) => {
                        return (
                            <Filter title="Сортировать по:">
                                <Select 
                                    value={value}
                                    onChange={onChange}
                                    name="sort"
                                    options={sortBy}
                                />
                            </Filter>
                        )
                    }}
                />
            </div>
            <div className={s.bottom}>
                <ButtonDefault className={s.button}>Применить</ButtonDefault>
                <ButtonDefault className={s.button} onClick={handleReset}>Сбросить</ButtonDefault>
            </div>
        </form>
    )
}

export default FiltersForm
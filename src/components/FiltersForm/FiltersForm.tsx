import React from 'react'
import s from './FiltersForm.module.scss'
import { useActions } from '../../hooks/useActions'
import { Controller, useForm } from 'react-hook-form'
import { Title } from '../UI/Title/Title'
import ButtonDefault from '../UI/ButtonDefault/ButtonDefault'
import { Slider } from '../UI/Slider/Slider'
import { Select } from '../UI/Select/Select'
import years, { genres, sortBy } from './FiltersConsts'

interface FiltersFormProps{

}

const FiltersForm:React.FunctionComponent<FiltersFormProps> = () => {
    const { toggleFilters } = useActions()

    const { handleSubmit, control, getValues, reset } = useForm({
        defaultValues: {
            sort: sortBy[0],
            genres: genres[0],
            rating: [1, 10],
            year: years[0]
        }
    })

    return (
        <form 
            action="#"
            className={s.filters}
        >
            <div className={s.top}>
                <Title variant='h3'>Фильтры</Title>
            </div>
            <div className={s.main}>
                <Controller
                    name="rating"
                    control={control}
                    render = {({field: {value, onChange}}) => {
                        return (
                            <Slider values={value} min={1} max={10} onChange={onChange} step={1}/>
                        )
                    }}
                />
                <Controller
                    name="year"
                    control={control}
                    render = {({field: {value, onChange}}) => {
                        return (
                            <Select 
                                value={value}
                                onChange={onChange}
                                name="year"
                                options={years}
                            />
                        )
                    }}
                />
                <Controller
                    name="genres"
                    control={control}
                    render = {({field: {value, onChange}}) => {
                        return (
                            <Select 
                                value={value}
                                onChange={onChange}
                                name="genres"
                                options={genres}
                            />
                        )
                    }}
                />
                <Controller
                    name="sort"
                    control={control}
                    render = {({field: {value, onChange}}) => {
                        return (
                            <Select 
                                value={value}
                                onChange={onChange}
                                name="sort"
                                options={sortBy}
                            />
                        )
                    }}
                />
            </div>
            <div className={s.bottom}>
                <ButtonDefault>Применить</ButtonDefault>
                <ButtonDefault>Сбросить</ButtonDefault>
            </div>
        </form>
    )
}

export default FiltersForm
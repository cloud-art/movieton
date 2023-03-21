import React from 'react'
import s from './FiltersForm.module.scss'
import { useActions } from '../../hooks/useActions'
import { Controller, useForm } from 'react-hook-form'
import { Title } from '../UI/Title/Title'
import ButtonDefault from '../UI/ButtonDefault/ButtonDefault'
import InputText from '../UI/InputText/InputText'
import Slider from '../UI/Slider/Slider'
import Select from '../UI/Select/Select'

interface FiltersFormProps{

}

const FiltersForm:React.FunctionComponent<FiltersFormProps> = () => {
    const { toggleFilters } = useActions()

    const { handleSubmit, control, getValues, reset } = useForm({
        defaultValues: {
            sort: '1',
            genres: '1',
            rating: '1',
            year: '1'
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
                            <Slider />
                        )
                    }}
                />
                <Controller
                    name="year"
                    control={control}
                    render = {({field: {value, onChange}}) => {
                        return (
                            <Select />
                        )
                    }}
                />
                <Controller
                    name="genres"
                    control={control}
                    render = {({field: {value, onChange}}) => {
                        return (
                            <Select />
                        )
                    }}
                />
                <Controller
                    name="sort"
                    control={control}
                    render = {({field: {value, onChange}}) => {
                        return (
                            <Select />
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
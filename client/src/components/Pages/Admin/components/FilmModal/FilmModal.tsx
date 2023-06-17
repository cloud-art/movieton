import React, { useEffect, useState } from 'react'
import s from './FilmModal.module.scss'
import Modal from '../../../../Modal/Modal'
import ButtonDefault from '../../../../UI/ButtonDefault/ButtonDefault'
import InputText from '../../../../UI/InputText/InputText'
import { Title } from '../../../../UI/Title/Title'
import { IGenre } from '../../../../../types/IGenre'
import { IPerson } from '../../../../../types/IPerson'
import { Select } from '../../../../UI/Select/Select'
import { createFilm, fetchGenres } from '../../../../../http/filmApi'
import { fetchAllPersonsByActivity } from '../../../../../http/personApi'
import TextArea from '../../../../UI/TextArea/TextArea'
import { IFilm } from '../../../../../types/IFilm'

type FilmModalProps = {
    isOpen: boolean;
    closeModal: () => void;
}

const FilmModal:React.FC<FilmModalProps> = ({
    isOpen,
    closeModal,
}) => {
    const [kinopoiskId, setKinopoiskId] = useState('')
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [shortDesc, setShortDesc] = useState('')
    const [rating, setRating] = useState('')
    const [duration, setDuration] = useState('')
    const [date, setDate] = useState('')
    const [ageLimit, setAgeLimit] = useState('')
    const [img, setImg] = useState(null)
    const [genres, setGenres] = useState<Array<{value: string, label: string}>>([])
    const [writers, setWriters] = useState<Array<{value: string, label: string}>>([])
    const [actors, setActors] = useState<Array<{value: string, label: string}>>([])

    const [genresData, setGenresData] = useState<Array<IGenre>>([{title: '', id: 0}])
    const [writersData, setWritersData] = useState<Array<IPerson>>([{name: '', surname: '', id: 0}])
    const [actorsData, setActorsData] = useState<Array<IPerson>>([{name: '', surname: '', id: 0}])

    const selectFile = (e: any) => {
        setImg(e.target.files[0])
    }

    const onSubmit = (e: any) => {
        e.preventDefault()
        if (
            kinopoiskId !== ''
            && title !== ''
            && desc !== ''
            && shortDesc !== ''
            && rating !== ''
            && duration !== ''
            && !isNaN(new Date(date).valueOf())
            && ageLimit !== ''
            && img
            && genres.length
            && writers.length
            && actors.length
        ){
            createFilm(
                parseInt(kinopoiskId),
                title,
                desc,
                shortDesc,
                parseInt(rating),
                parseInt(duration),
                new Date(date),
                parseInt(ageLimit),
                img,
                genres.map(data => {
                    return {
                        id: parseInt(data.value),
                        title: data.label
                    }
                }),
                writers.map(data => {
                    return {
                        id: parseInt(data.value),
                        name: '',
                        surname: ''
                    }
                }),
                                actors.map(data => {
                    return {
                        id: parseInt(data.value),
                        name: '',
                        surname: ''
                    }
                })
            ).then(data => console.log(data))
            closeModal()
        }
    }
 
    useEffect(() => {
        fetchGenres().then(data => setGenresData(data))
        fetchAllPersonsByActivity('Режиссёр').then(data => setWritersData(data))
        fetchAllPersonsByActivity('Актёр').then(data => setActorsData(data))
    }, []) 

    return (
        <Modal
            isOpen={isOpen}
            closeModal={closeModal}
        >
            <form
                className={s.form} 
                onSubmit={onSubmit}
            >
                <Title className={s.title}>Добавление фильмов</Title>
                <div className={s.content}>
                    <InputText 
                        label='Id Кинопоиска'
                        className={s.label}
                        value={kinopoiskId}
                        onChange={(e: any) => setKinopoiskId(e.target.value)}
                    />
                    <InputText 
                        label='Название'
                        className={s.label}
                        value={title}
                        onChange={(e: any) => setTitle(e.target.value)}
                    />
                    <InputText 
                        label='Рейтинг'
                        className={s.label}
                        value={rating}
                        onChange={(e: any) => setRating(e.target.value)}
                    />
                    <InputText 
                        label='Краткое описание'
                        className={s.label}
                        value={shortDesc}
                        onChange={(e: any) => setShortDesc(e.target.value)}
                    />
                    <InputText 
                        label='Длительность'
                        className={s.label}
                        value={duration}
                        onChange={(e: any) => setDuration(e.target.value)}
                    />
                    <InputText 
                        label='Дата'
                        className={s.label}
                        value={date}
                        onChange={(e: any) => setDate(e.target.value)}
                    />
                    <InputText 
                        label='Возрастное ограничение'
                        className={s.label}
                        value={ageLimit}
                        onChange={(e: any) => setAgeLimit(e.target.value)}
                    />               
                    <Select 
                        label='Режиссёры'
                        classname={s.label}
                        value={writers}
                        options={writersData.map(writer => {
                            return {label: `${writer.name} ${writer.surname}`, value: String(writer.id)}
                        })}
                        onChange={(e: any) => setWriters(e)}
                        name='Режиссёры'
                        isMulti={true}
                    />
                    <Select 
                        label='Актёры'
                        classname={s.label}
                        value={actors}
                        options={actorsData.map(actor => {
                            return {label: `${actor.name} ${actor.surname}`, value: String(actor.id)}
                        })}
                        onChange={(e: any) => setActors(e)}
                        name='Вид Работы'
                        isMulti={true}
                    />
                    <Select 
                        label='Жанры'
                        classname={s.label}
                        value={genres}
                        options={genresData.map(genre => {
                            return {label: genre.title, value: String(genre.id)}
                        })}
                        onChange={(e: any) => setGenres(e)}
                        name='Жанры'
                        isMulti={true}
                    />
                </div>
                <div className={s.bottom}>
                    <TextArea
                        label='Описание'
                        className={s.label}
                        value={desc}
                        onChange={(e: any) => setDesc(e.target.value)}
                    /> 
                <input type="file" onChange={selectFile}/>
                </div>
                
                <ButtonDefault type='submit'>Добавить</ButtonDefault>
            </form>
        </Modal>
    )
}

export default FilmModal
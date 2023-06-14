import React, { Component, useState } from 'react'
import s from './Admin.module.scss'
import ButtonDefault from '../../UI/ButtonDefault/ButtonDefault'
import AddActivityForm from './components/ActivityModal/ActivityModal'
import GenreModal from './components/GenreModal/GenreModal'
import FilmModal from './components/FilmModal/FilmModal'
import PersonModal from './components/PersonModal/PersonModal'
import ActivityModal from './components/ActivityModal/ActivityModal'

type AdminProps = {
}

const Admin:React.FunctionComponent<AdminProps> = () => {
    const [activityVisible, setActivityVisible] = useState(false)
    const [filmVisible, setFilmVisible] = useState(false)
    const [genreVisible, setGenreVisible] = useState(false)
    const [personVisible, setPersonVisible] = useState(false)

    return (
        <>
        <section className={s.section}>
            <div className='container'>
                <div className={s.buttons}>
                    <ButtonDefault 
                        onClick={() => setGenreVisible(true)} 
                        className={s.button}
                    >
                        Добавить жанр
                    </ButtonDefault>
                    <ButtonDefault 
                        onClick={() => setFilmVisible(true)} 
                        className={s.button}
                    >
                        Добавить фильм
                    </ButtonDefault>
                    <ButtonDefault 
                        onClick={() => setPersonVisible(true)} 
                        className={s.button}
                    >
                        Добавить личность
                        </ButtonDefault>
                    <ButtonDefault
                        onClick={() => setActivityVisible(true)} 
                        className={s.button}
                    >
                        Добавить вид работы
                    </ButtonDefault>
                </div>
            </div>
        </section>
        <GenreModal 
            isOpen={genreVisible} 
            closeModal={() => setGenreVisible(false)}
        />
        <FilmModal 
            isOpen={filmVisible} 
            closeModal={() => setFilmVisible(false)}
        />
        <PersonModal 
            isOpen={personVisible} 
            closeModal={() => setPersonVisible(false)}
        />
        <ActivityModal 
            isOpen={activityVisible} 
            closeModal={() => setActivityVisible(false)}
        />
        </>
    )
}

export default Admin
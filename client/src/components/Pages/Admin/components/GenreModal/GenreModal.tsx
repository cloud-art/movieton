import React, { useState } from 'react'
import s from './GenreModal.module.scss'
import Modal from '../../../../Modal/Modal'
import InputText from '../../../../UI/InputText/InputText'
import ButtonDefault from '../../../../UI/ButtonDefault/ButtonDefault'
import { Title } from '../../../../UI/Title/Title'
import { createGenre } from '../../../../../http/filmApi'

type GenreModalProps = {
    isOpen: boolean;
    closeModal: () => void;
}

const GenreModal:React.FC<GenreModalProps> = ({    
    isOpen,
    closeModal,
}) => {
    const [genre, setGenre] = useState('')

    const onSubmit = (e: any) => {
        e.preventDefault()
        if (genre !== ''){
            createGenre(genre).then(data => console.log(data))
            closeModal()
        }

    }

    return (
        <Modal
            isOpen={isOpen}
            closeModal={closeModal}
        >
            <form
                className={s.form} 
                onSubmit={onSubmit}
            >
                <Title className={s.title}>Добавление жанра</Title>
                <InputText 
                    label='Название'
                    className={s.label}
                    value={genre}
                    onChange={(e: any) => setGenre(e.target.value)}
                />
                <ButtonDefault type='submit'>Добавить</ButtonDefault>
            </form>
        </Modal>
    )
}

export default GenreModal
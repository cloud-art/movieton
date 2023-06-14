import React, { useState } from 'react'
import s from './ActivityModal.module.scss'
import Modal from '../../../../Modal/Modal'
import ButtonDefault from '../../../../UI/ButtonDefault/ButtonDefault';
import InputText from '../../../../UI/InputText/InputText';
import { Title } from '../../../../UI/Title/Title';
import { createActivity } from '../../../../../http/personApi';

type ActivityModalProps = {
    isOpen: boolean;
    closeModal: () => void;
}

const ActivityModal:React.FC<ActivityModalProps> = ({
    isOpen,
    closeModal,
}) => {
    const [activity, setActivity] = useState('')

    const onSubmit = (e: any) => {
        e.preventDefault()
        if (activity !== ''){
            createActivity(activity).then(data => console.log(data))
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
                <Title className={s.title}>Добавление вида работы</Title>
                <InputText 
                    label='Название'
                    className={s.label}
                    value={activity}
                    onChange={(e: any) => setActivity(e.target.value)}
                />
                <ButtonDefault type='submit'>Добавить</ButtonDefault>
            </form>
        </Modal>
    )
}

export default ActivityModal
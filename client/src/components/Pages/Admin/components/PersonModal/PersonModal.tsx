import React, { useEffect, useState } from 'react'
import s from './PersonModal.module.scss'
import ButtonDefault from '../../../../UI/ButtonDefault/ButtonDefault'
import Modal from '../../../../Modal/Modal'
import InputText from '../../../../UI/InputText/InputText'
import { Title } from '../../../../UI/Title/Title'
import { Select } from '../../../../UI/Select/Select'
import { IActivity } from '../../../../../types/IPerson'
import { createPerson, fetchAllActivities } from '../../../../../http/personApi'
import { set } from 'react-hook-form'

type PersonModalProps = {
    isOpen: boolean;
    closeModal: () => void;
}

const PersonModal:React.FC<PersonModalProps> = ({
    isOpen,
    closeModal,
}) => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [birthday, setBirthday] = useState('')
    const [activities, setActivities] = useState<Array<{value: string, label: string}>>([])
    const [activitiesData, setActiviesData] = useState<Array<IActivity>>([{title: '', id: 0}])

    const onSubmit = (e: any) => {
        e.preventDefault()
        if (
            name !== '' 
            && surname !== '' 
            && birthday !== null 
            && activities 
            && activities.length
            && !isNaN(new Date(birthday).valueOf())
        ){
            createPerson(
                name, 
                surname, 
                new Date(birthday), 
                activities.map(data => {
                    return {
                        id: parseInt(data.value),
                        title: data.label
                    }
                })    
            )
            closeModal()
            setName('')
            setSurname('')
            setBirthday('')
            setActivities([])
        }

    }

    useEffect(() => {
        fetchAllActivities().then(data => setActiviesData(data))
        setTimeout(() => {console.log(activitiesData)}, 0)
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
                <Title className={s.title}>Добавление вида работы</Title>
                <InputText 
                    label='Имя'
                    className={s.label}
                    value={name}
                    onChange={(e: any) => setName(e.target.value)}
                />
                <InputText 
                    label='Фамилия'
                    className={s.label}
                    value={surname}
                    onChange={(e: any) => setSurname(e.target.value)}
                />
                <InputText 
                    label='День рождения'
                    className={s.label}
                    value={birthday}
                    onChange={(e: any) => setBirthday(e.target.value)}
                />
                <Select 
                    label='Вид работы'
                    classname={s.label}
                    value={activities}
                    options={activitiesData.map(activity => {
                        return {label: activity.title, value: String(activity.id)}
                    })}
                    onChange={(e: any) => setActivities(e)}
                    name='Вид Работы'
                    isMulti={true}
                />
                <ButtonDefault type='submit'>Добавить</ButtonDefault>
            </form>
        </Modal>
    )
}

export default PersonModal
import React, { useState } from 'react'
import ButtonDefault from '../../../../../../UI/ButtonDefault/ButtonDefault'
import s from './AddCommentForm.module.scss'
import { createComment } from '../../../../../../../http/reviewApi'

type AddCommentFormProps = {
    movieId: number;
    userId: number;
    updateComments: () => void;
}

const AddCommentForm:React.FC<AddCommentFormProps> = ({
    movieId,
    userId,
    updateComments,
}) => {
    const [value, setValue] = useState('')
    const onSubmit = (e: any) => {
        e.preventDefault()
        if (value !== ''){
            createComment(movieId, userId, value).then(data => console.log(data)).then(() => updateComments())
            setValue('')
        }
    }

    return (
        <form className={s.form} onSubmit={onSubmit}>
            <textarea value={value} onChange={(e) => setValue(e.target.value)} className={s.input}/>
            <ButtonDefault type='submit' className={s.send}>Отправить</ButtonDefault>
        </form>
    )
}

export default AddCommentForm
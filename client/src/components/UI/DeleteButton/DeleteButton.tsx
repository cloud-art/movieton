import React from 'react'
import ButtonDefault from '../ButtonDefault/ButtonDefault'
import s from './DeleteButton.module.scss'

type DeleteButtonProps = {
    onDeleteClick: () => void;
}

const DeleteButton:React.FC<DeleteButtonProps> = ({
    onDeleteClick,
}) => {



    return (
        <ButtonDefault
            variant='delete'
            onClick={onDeleteClick}
            className={s.button}
        >
            Удалить
        </ButtonDefault>
    )
}

export default DeleteButton
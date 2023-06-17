import React, { useState } from 'react'
import s from './Player.module.scss'
import { useEffect } from 'react'
import ButtonDefault from '../../../../UI/ButtonDefault/ButtonDefault';
import { FiPlay } from 'react-icons/fi';
import Modal from '../../../../Modal/Modal';
import classNames from 'classnames';
import ReactModal from 'react-modal';

type PlayerProps = {
    kinopoiskId: number;
    classname?: string;
}

const Player:React.FC<PlayerProps> = ({
    kinopoiskId,
    classname,
}) => {
    const [isModalOpen, setModalOpen] = useState(false)

    const onModalOpen = () => {
        setModalOpen(true)
        const script = document.createElement('script');
		script.src = '/player.js';
		document.body.appendChild(script);

		return () => {
			script.remove();
		};
    }

    const modalStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '0px',
            border: 'none'
        },
    }

    return (
        <>
        <ButtonDefault
            // onClick={() => push(`/room/${data?.id}`)}
            className={classNames(s.button, classname)}
            onClick={onModalOpen}
            variant="regular"
            // disabled={isError}
            startIcon={<FiPlay />}
        >
            Смотреть
        </ButtonDefault>
        <ReactModal
            isOpen={isModalOpen}
            onRequestClose={() => setModalOpen(false)}
            style={modalStyles}
            contentLabel="Exampleasdasd Modal"
            ariaHideApp={false}
        >
            <div className={s.videoContainer}>
                <div
                    id="kinobd"
                    data-kinopoisk={kinopoiskId}
                />
            </div>
                </ReactModal>
        </>
  )
}

export default Player
import React, { PropsWithChildren } from 'react'
import ReactModal, { Styles } from 'react-modal'

type ModalProps = {
    isOpen: boolean,
    onAfterOpen?: () => void,
    closeModal: () => void,
    classname?: string,
    style?: React.CSSProperties,
}

const Modal:React.FC<PropsWithChildren<ModalProps>> = ({
    children,
    isOpen,
    onAfterOpen,
    closeModal,
    classname,
    style,
}) => {

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
            ...style
        },
        
    }

    return (
        <ReactModal
            isOpen={isOpen}
            onAfterOpen={onAfterOpen}
            onRequestClose={closeModal}
            className={classname}
            style={modalStyles}
            contentLabel="Exampleasdasd Modal"
            ariaHideApp={false}
        >

            {children}
        </ReactModal>
    )
}

export default Modal
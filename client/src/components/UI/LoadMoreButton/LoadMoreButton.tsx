import React, { PropsWithChildren } from 'react'
import Button from '../Button/Button'
import s from './LoadMoreButton.module.scss'

type LoadMoreButtonProps = {
    handleClick: () => void;
}

const LoadMoreButton:React.FC<PropsWithChildren<LoadMoreButtonProps>> = ({
    children,
    handleClick,
}) => {
  return (
    <Button
        className={s.button}
        onClick={handleClick}
    >
        {children}
    </Button>
  )
}

export default LoadMoreButton
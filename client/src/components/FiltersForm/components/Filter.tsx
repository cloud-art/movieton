import React, { PropsWithChildren } from 'react'
import { Title } from '../../UI/Title/Title';
import s from './Filter.module.scss'

interface FilterProps{
    title?: string;
}

export const Filter:React.FC<PropsWithChildren<FilterProps>> = ({children, title}) => {
  return (
    <div className={s.filter}>
        <Title isBold={true} variant='h3'>{title}</Title>
        <div className={s.content}>{children}</div>
    </div>
  )
}

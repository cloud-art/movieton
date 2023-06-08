import React from 'react'
import s from './AboutList.module.scss'
import AboutItem from '../../types/IAboutItem'

type AboutListProps = {
    items: Array<AboutItem>;
}

const AboutList:React.FC<AboutListProps> = ({items}) => {
  return (
    <ul>
        {items?.map((el) => (
            <li key={el.title} className={s.item}>
                <span className={s.caption}>{el.title}</span>
                {el.state ? <span className={s.value}>{el.value}</span> : '—'}
            </li>
        ))}
    </ul>
  )
}

export default AboutList
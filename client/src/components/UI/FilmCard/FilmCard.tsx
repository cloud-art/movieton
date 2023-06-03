import React from 'react'
import s from './FilmCard.module.scss'
import classNames from 'classnames'
import PropertiesRow from './components/PropertiesRow'
import IFilmCard from '../../../types/IFilmCard'

type filmCardProps = {
    data: IFilmCard;
    classname?: string;
}

const FilmCard:React.FC<filmCardProps> = ({data, classname}) => {
  return (
    <div className={classNames(s.card, classname)}>
        <div className={s.imageSection}>
            <div className={s.imgWrapper}>
                <img className={s.img} src={data.img} />
            </div>
            <div className={s.properties}>
                <div className={s.inner}>
                    <PropertiesRow><div className={s.rating}>7,7</div></PropertiesRow>
                    <div className={s.propertiesInfo}>
                        <PropertiesRow><div>2012, документальное</div></PropertiesRow>
                        <PropertiesRow><div>1 Сезон</div></PropertiesRow> 
                    </div>
                </div>
            </div>
        </div>
        <div className={s.textSection}>
            <span className={s.title}>{data.title}</span>
        </div>
    </div>
  )
}

export default FilmCard
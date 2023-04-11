import React from 'react'
import s from './GalleryCard.module.scss'
import classNames from 'classnames'
import ButtonDefault from '../UI/ButtonDefault/ButtonDefault'

type galleryCardProps = {
    img: string;
    title: string;
}

const GalleryCard:React.FC<galleryCardProps> = ({img, title}) => {
  return (
    <div className={classNames(s.galleryCard)}>
        <img className={s.img} src={img} />
        <div className={s.body}>
          <span className={s.title}>{title}</span>
        </div>
    </div>
  )
}

export default GalleryCard
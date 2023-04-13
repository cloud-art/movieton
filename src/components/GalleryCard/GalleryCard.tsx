import React from 'react'
import s from './GalleryCard.module.scss'
import classNames from 'classnames'
import ButtonDefault from '../UI/ButtonDefault/ButtonDefault'
import PropertiesRow from './components/PropertiesRow'

type galleryCardProps = {
    img: string;
    title: string;
}

const GalleryCard:React.FC<galleryCardProps> = ({img, title}) => {
  return (
    <div className={classNames(s.galleryCard)}>
        <div className={s.galleryBlock}>
            <div className={s.imageSection}>
                <div className={s.poster}>
                    <div className={s.imgWrapper}>
                        <img className={s.img} src={img} />
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
            </div>
            <div className={s.textSection}>
                <span className={s.title}>{title}</span>
            </div>
        </div>
    </div>
  )
}

export default GalleryCard
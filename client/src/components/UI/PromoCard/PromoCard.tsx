import classNames from 'classnames';
import React from 'react'
import ButtonDefault from '../ButtonDefault/ButtonDefault';
import s from './PromoCard.module.scss'
import { number } from 'prop-types';

interface PromoCardProps {
    img: string;
    title: string;
    desc: string;
    classname?: string;
    maxWidth?: number;
}

export const PromoCard: React.FC<PromoCardProps> = ({img, title, desc, classname, maxWidth}) => {
  return (
    <div className={classNames(s.promoCard, classname)} style={{maxWidth: `${maxWidth}px`}}>
        <img className={s.img} src={img} />
        <div className={s.body}>
          <span className={s.title}>{title}</span>
          <span className={s.desc}>{desc}</span>
          <ButtonDefault className={s.btn}>Открыть</ButtonDefault>
        </div>
    </div>
  )
}

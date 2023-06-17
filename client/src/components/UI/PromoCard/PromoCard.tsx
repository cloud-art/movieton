import classNames from 'classnames';
import React from 'react'
import ButtonDefault from '../ButtonDefault/ButtonDefault';
import s from './PromoCard.module.scss'
import { number } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FILM_ROUTE } from '../../../utils/consts';

interface PromoCardProps {
    id: number;
    img: string;
    title: string;
    desc: string;
    classname?: string;
    maxWidth?: number;
}

export const PromoCard: React.FC<PromoCardProps> = ({id, img, title, desc, classname, maxWidth}) => {
    const navigate = useNavigate()

    const onFilmClick = () => {
        navigate(FILM_ROUTE + `/${id}`)
    }

    return (
        <div className={classNames(s.promoCard, classname)} style={{maxWidth: `${maxWidth}px`}}>
            <img className={s.img} src={img} />
            <div className={s.body}>
            <span className={s.title}>{title}</span>
            <span className={s.desc}>{desc}</span>
            <ButtonDefault className={s.btn} onClick={onFilmClick}>Открыть</ButtonDefault>
            </div>
        </div>
    )
}

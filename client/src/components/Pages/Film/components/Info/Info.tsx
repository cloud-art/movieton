import React, { Fragment } from 'react'
import { IFilm } from '../../../../../types/IFilm'
import AboutList from '../../../../AboutList/AboutList';
import AboutItem from '../../../../../types/IAboutItem';
import s from './Info.module.scss'

type InfoProps = {
    film: IFilm;
}
const Info:React.FC<InfoProps> = ({film}) => {
    const { genres, short_desc, ageLimit, duration } = { ...film };

    const filmInfo: Array<AboutItem> = [
        {
            title: 'Жанр',
			value: genres?.map((el, idx) => (
				<Fragment key={idx}>
					{idx ? ', ' : ''}
					{el.title}
				</Fragment>
			)),
			state: genres?.length,
        },
        { title: 'О фильме', value: short_desc, state: short_desc },
        {
			title: 'Возраст',
			value: <span className={s.age}>{ageLimit}+</span>,
			state: ageLimit,
		},
        { title: 'Время', value: `${duration} мин`, state: duration },

    ]

  return (
    <AboutList items={filmInfo}/>
  )
}

export default Info
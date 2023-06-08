import React from 'react'
import { IFilm } from '../../../../../types/IFilm'
import Tabs  from '../../../../UI/Tabs/Tabs'
import s from './FilmTabs.module.scss'

type FilmTabsProps = {
    film: IFilm;
}

const FilmTabs:React.FC<FilmTabsProps> = ({
    film
}) => {
    const { actors, desc } = {...film}

    const tabs = [
        {
            title: 'Описание',
			value: <p className={s.desc}>{desc}</p>,
			state: desc,
        },
        { 
            title: 'Актёры', 
            value: 
                <ul>
                    {actors?.map(el => {
                        return <li>{`${el.name} ${el.surname}`}</li>
                    })}        
                </ul>, 
            state: actors?.length! > 0
        }
    ]

    return (
        <Tabs tabs={tabs}></Tabs>
    )
}

export default FilmTabs
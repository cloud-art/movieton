import classNames from 'classnames'
import React from 'react'
import s from "./FilmsList.module.scss"
import { useState } from 'react'
import ButtonDefault from '../../../../UI/ButtonDefault/ButtonDefault'
import { Title } from '../../../../UI/Title/Title'
import { Gallery } from '../../../../Gallery/Gallery'

interface FilmListProps {
    title: String
}

const FilmsList: React.FC<FilmListProps> = ({title}) => {
    // const [data, setData] = useState(
    //     [{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}, {id: '5'}, {id: '6'}]
    // )

    const data = [
        {
            id: 1,
            img: "https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85",
            title: "Губка Боб Квадратные Штаны"
        },
        {
            id: 1,
            img: "https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85",
            title: "Губка Боб Квадратные Штаны"
        },
        {
            id: 1,
            img: "https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85",
            title: "Губка Боб Квадратные Штаны"
        },
        {
            id: 1,
            img: "https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85",
            title: "Губка Боб Квадратные Штаны"
        },
        {
            id: 1,
            img: "https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85",
            title: "Губка Боб Квадратные Штаны"
        },
        {
            id: 1,
            img: "https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85",
            title: "Губка Боб Квадратные Штаны"
        },
        {
            id: 1,
            img: "https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85",
            title: "Губка Боб Квадратные Штаны"
        },
    ]

    return (
        <div className={classNames(s.container)}>
            <div className={s.top}>
                <Title variant='h2'>{title}</Title>
                <ButtonDefault>Смотреть все</ButtonDefault>
            </div>
            <div className={s.content}>
                <Gallery data={data}></Gallery>
            </div>
        </div>
    )
}

export default FilmsList
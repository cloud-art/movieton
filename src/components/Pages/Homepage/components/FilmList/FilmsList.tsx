import classNames from 'classnames'
import React, { FC } from 'react'
import { Grid } from '../../../../Grid/Grid'
import s from "./FilmsList.module.scss"
import { useState } from 'react'
import { FilmItem } from '../../../../FilmItem/FilmItem'
import Button from '../../../../Button/Button'
import ButtonDefault from '../../../../ButtonDefault/ButtonDefault'
import { Title } from '../../../../Title/Title'
import { Carousel } from '../../../../Carousel/Carousel'

interface FilmListProps {
    title: String
}

const FilmsList: FC<FilmListProps> = ({title}) => {
    const [data, setData] = useState(
        [{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}, {id: '5'}, {id: '6'}]
    )

    return (
        <div className={classNames(s.container)}>
            <div className={s.top}>
                <Title variant='h2'>{title}</Title>
                <ButtonDefault>Смотреть все</ButtonDefault>
            </div>
            {/* <Grid>
                {data?.map((el) => (
                    <FilmItem key={el.id} item={el.id} ></FilmItem>
                ))}
            </Grid> */}
            <Carousel>
                <div className={classNames(s.item, s.item1)}>Item 1</div>
                <div className={classNames(s.item, s.item2)}>Item 2</div>
                <div className={classNames(s.item, s.item3)}>Item 3</div>
            </Carousel>
        </div>
    )
}

export default FilmsList
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchOneFilm } from '../../../http/filmApi'
import s from './Film.module.scss'
import classNames from 'classnames'
import Button from '../../UI/Button/Button'
import { Title } from '../../UI/Title/Title'
import { IFilm } from '../../../types/IFilm'
import ButtonDefault from '../../UI/ButtonDefault/ButtonDefault'
import { FiPlay } from 'react-icons/fi'

type FilmProps = {}

const Film:React.FC<FilmProps> = () => {
    const [film, setFilm] = useState<IFilm>()
    const {id} = useParams()

    useEffect(() => {
        if (id && parseInt(id)){
            fetchOneFilm(parseInt(id)).then(film => setFilm(film))
        } 
    }, [])

    return (
        film ? ( 
        <section className={s.section}>
			<div className={classNames('container wrapper', s.container)}>
				<div className={s.top}>
					Назад
				</div>
				<div className={s.content}>
					<div className={s.left}>
						<img className={s.image} src={process.env.REACT_APP_API_URL + film.img} alt={film.short_desc} />
                        Рейтинг
						{/* <MovieRating className={s.rating} rating={film.rating} /> */}
					</div>
					<div className={s.right}>
						<Title className={s.title} variant="h1">
							{film.title} {new Date(film.date).getFullYear()}
						</Title>
						{/* <span className={s.originalTitle}>{alternativeName}</span> */}
						<div className={s.btns}>
							<ButtonDefault
								// onClick={() => push(`/room/${data?.id}`)}
								className={s.btn}
								variant="regular"
								// disabled={isError}
								// startIcon={<FiPlay />}
							>
								Смотреть
							</ButtonDefault>
							{/* <MovieFavorite
								className={s.btn}
								variant="regular"
								id={data?.id}
								disabled={isError}
							/> */}
						</div>
						{/* <Title variant="h2" className={s.subtitle}>
							О {convertMovieType(type)}е
						</Title> */}
						{/* <FilmInfo data={data} /> */}
					</div>
				</div>
				{/* <FilmTabs data={data} />
				{similarMovies?.length ? <SimilarMovies movies={similarMovies} /> : null}
				<Reviews /> */}
			</div>
		</section>
        )
        : (
        <title>id не найдено</title>
        )   
    )
}

export default Film
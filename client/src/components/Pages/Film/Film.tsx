import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { deleteFilm, fetchOneFilm } from '../../../http/filmApi'
import s from './Film.module.scss'
import classNames from 'classnames'
import { Title } from '../../UI/Title/Title'
import { IFilm } from '../../../types/IFilm'
import ButtonDefault from '../../UI/ButtonDefault/ButtonDefault'
import { FiBookmark, FiPlay } from 'react-icons/fi'
import Info from './components/Info/Info'
import Tabs from './components/Tabs/FilmTabs'
import Reviews from './components/Reviews/Reviews'
import Comments from './components/Comments/Comments'
import Rating from '../../UI/Rating/Rating'
import Favourite from './components/Favourite/Favourite'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

type FilmProps = {}

const Film:React.FC<FilmProps> = () => {
    const [film, setFilm] = useState<IFilm>()
    const {id} = useParams()

	const isAuth = useTypedSelector(state => state.userReducer.isAuth)
    const userRole = useTypedSelector(state => state.userReducer.user.role)

    useEffect(() => {
        id && parseInt(id) &&
		fetchOneFilm(parseInt(id)).then((data) => {
			setFilm({
				...data, 
				actors: data.actors.map((e: any) => {return e.person})
			});
		})
    }, [])

	const onDeleteClick = () => {
		film && film.id && deleteFilm(film.id).then(data => console.log(data))
	}

    return (
        film ? ( 
        <section className={s.section}>
			<div className={classNames('container wrapper', s.container)}>
				<div className={s.content}>
					<div className={s.left}>
						<img className={s.image} src={process.env.REACT_APP_API_URL + film.img} alt={film.short_desc} />
						<Rating value={film.rating} classname={s.rating}/>
					</div>
					<div className={s.right}>
						<Title className={s.title} variant="h1" isBold={true}>
							{film.title} {new Date(film.date).getFullYear()}
						</Title>
						<div className={s.buttons}>
							<ButtonDefault
								// onClick={() => push(`/room/${data?.id}`)}
								className={s.button}
								variant="regular"
								// disabled={isError}
								startIcon={<FiPlay />}
							>
								Смотреть
							</ButtonDefault>
							<Favourite filmId={film.id} disabled={!isAuth}/>
						</div>
						<Title variant="h2" isBold={true} className={s. infoLabel}>
							О фильме
						</Title>
						<Info film={film} />
						{isAuth && userRole === 'ADMIN' &&
						<ButtonDefault
							onClick={onDeleteClick}
							variant='delete'
							className={s.delete}	
						>
							Удалить
						</ButtonDefault>
						}
					</div>
				</div>
				<Tabs film={film} />
				<Reviews movieId={film.id}/>
				<Comments movieId={film.id}/>
			</div>
		</section>
        )
        : (
        <title>id не найдено</title>
        )   
    )
}

export default Film
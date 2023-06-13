import React, { useEffect, useState } from 'react'
import ButtonDefault from '../../../../UI/ButtonDefault/ButtonDefault'
import { FiBookmark } from 'react-icons/fi'
import classNames from 'classnames'
import s from './Favourite.module.scss'
import { createFavouriteFilm, deleteFavouriteFilm, fetchFavouriteInfo, fetchOneFavouriteFilmByUser } from '../../../../../http/favouriteApi'
import { useTypedSelector } from '../../../../../hooks/useTypedSelector'

type FavouriteProps = {
    filmId: number;
    disabled: boolean;
    classname?: string;
}

const Favourite:React.FC<FavouriteProps> = ({
    filmId,
    disabled,
    classname,
}) => {
    const [favouriteInfo, setFavouriteInfo] = useState<{id: number}>()
    const [favouriteFilm, setFavouriteFilm] = useState<{id: number} | null>(null)

    const userId = useTypedSelector(state => state.userReducer.user.id)

    useEffect(() => {
        fetchFavouriteInfo(userId).then(favourite => {
            setFavouriteInfo(favourite)
        })
        fetchOneFavouriteFilmByUser(userId, filmId).then(favouriteFilm => {
            if(favouriteFilm){
                setFavouriteFilm(favouriteFilm)
            } else{ 
                setFavouriteFilm(null)
            }
        })
    }, [])

    const onClickAdd = () => {
        favouriteInfo && createFavouriteFilm(favouriteInfo.id, filmId).then(data => {
            fetchOneFavouriteFilmByUser(userId, filmId).then(film => {
                if(film){
                    setFavouriteFilm(film)
                } else{ 
                    setFavouriteFilm(null)
                }
                console.log(film)
            })
        })
    }

    const onClickDelete = () => {
        favouriteFilm && deleteFavouriteFilm(favouriteFilm.id).then(() => {
            fetchOneFavouriteFilmByUser(userId, filmId).then(favouriteFilm => {
                if(favouriteFilm){
                    setFavouriteFilm(favouriteFilm)
                } else{ 
                    setFavouriteFilm(null)
                }
            })
        })
    }

    return (
    <>
        { !favouriteFilm ? 
        <ButtonDefault
            onClick={onClickAdd}
            className={classNames(classname, s.favourite)}
            variant="regular"
            disabled={disabled}
            startIcon={<FiBookmark />}
        >
            В избранное
        </ButtonDefault>        
        : <ButtonDefault
            onClick={onClickDelete}
            className={classNames(classname, s.favourite)}
            variant="regular"
            disabled={disabled}
            startIcon={<FiBookmark />}
        >
            Удалить из избранного
        </ButtonDefault>
        }  
    </>
  )
}

export default Favourite
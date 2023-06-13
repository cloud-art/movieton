import React, { useEffect, useRef, useState } from 'react'
import { fetchComments } from '../../../../../http/reviewApi';
import s from './Comments.module.scss'
import { IComment } from '../../../../../types/IFilm';
import { Title } from '../../../../UI/Title/Title';
import ButtonDefault from '../../../../UI/ButtonDefault/ButtonDefault';
import Item from './Components/Item/Item';
import Button from '../../../../UI/Button/Button';
import LoadMoreButton from '../../../../UI/LoadMoreButton/LoadMoreButton';
import AddCommentForm from './Components/AddCommentForm/AddCommentForm';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';

type ReviewsProps = {
    movieId: number;
}

const Reviews:React.FC<ReviewsProps> = ({movieId}) => {
    const [comments, setComments] = useState<Array<IComment>>()
    const [count, setCount] = useState<number>(0)
    const isAuth = useTypedSelector(state => state.userReducer.isAuth)
    const userId = useTypedSelector(state => state.userReducer.user.id)
    const limitStep = 5
    const limit = useRef(limitStep)

    const updateComments = (movieId: number, limit: number) => {
        fetchComments(movieId, limit).then(comments => {
            setComments(comments.rows)
            setCount(comments.count)
        })
    }

    useEffect(() => {
        updateComments(movieId, limit.current)
    }, [])

    const handleLoadMore = () => {
        limit.current += limitStep
        updateComments(movieId, limit.current)
    }

    const Content = () => {
        return(
        <>
            {comments?.map((comment) => {
                return <Item key={comment.id} comment={comment} />;
            })}
            {limit.current < count &&
                <LoadMoreButton handleClick={handleLoadMore}>
                    Загрузить ещё
                </LoadMoreButton>
            }
        </>
        )
    }

    return (
        <>
            <Title variant="h2" className={s.title}>Комментарии пользователей</Title>
            <div className={s.container}>
                <div className={s.content}>
                    {comments?.length? (
                        <Content />
                    ): <Title className={s.notFound}>Нет комментариев</Title>}
                    {isAuth && <AddCommentForm movieId={movieId} userId={userId} updateComments={() => {updateComments(movieId, limit.current)}}/>}
                </div>
            </div>
        </>
    )
}

export default Reviews
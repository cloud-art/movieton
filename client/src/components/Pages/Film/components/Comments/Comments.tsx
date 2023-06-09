import React, { useEffect, useRef, useState } from 'react'
import { fetchComments } from '../../../../../http/filmApi';
import s from './Comments.module.scss'
import { IComment } from '../../../../../types/IFilm';
import { Title } from '../../../../UI/Title/Title';
import ButtonDefault from '../../../../UI/ButtonDefault/ButtonDefault';
import Item from './Components/Item/Item';
import Button from '../../../../UI/Button/Button';

type ReviewsProps = {
    movieId: number;
}

const Reviews:React.FC<ReviewsProps> = ({movieId}) => {
    const [comments, setComments] = useState<Array<IComment>>()
    const [count, setCount] = useState<number>(0)
    const limitStep = 5
    const limit = useRef(limitStep)

    useEffect(() => {
        fetchComments(movieId, limit.current).then(comments => {
            setComments(comments.rows)
            setCount(comments.count)
        })
    }, [])

    const handleLoadMore = () => {
        limit.current += limitStep
        fetchComments(movieId, limit.current).then(comments => {
            console.log(limit)
            setComments(comments.rows)
        })
        console.log(limit)
    }

    const Content = () => {
        return(
        <>
            {comments?.map((comment) => {
                return <Item key={comment.id} comment={comment} />;
            })}
            {limit.current <= count &&
                <Button
                    className={s.loadMore}
                    onClick={handleLoadMore}
                >
                    Загрузить ещё
                </Button>
            }
        </>
        )
    }

    return (
        <>
            {comments?.length? (
                <div className={s.container}>
					<Title variant="h2" className={s.title}>
						Комментарии пользователей
					</Title>
					<div className={s.content}>
                        <Content />
					</div>
				</div>
            ): null}
        </>
    )
}

export default Reviews
import React from 'react'
import s from './Rating.module.scss'
import classNames from 'classnames';

type RatingProps = {
    value: number;
    classname?: string;
}

const Rating:React.FC<RatingProps> = ({
    value,
    classname,
}) => {
  return (
    <span className={classNames(s.rating, classname)}>{value}</span>
  )
}

export default Rating
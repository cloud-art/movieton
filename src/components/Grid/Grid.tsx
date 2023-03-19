import classNames from 'classnames'
import React, { PropsWithChildren } from 'react'
import s from './Grid.module.scss'

export const Grid = ({ children }: PropsWithChildren<{}>) => {
    return(
    <ul className={classNames(s.grid)}>
        {children}
    </ul>);
}


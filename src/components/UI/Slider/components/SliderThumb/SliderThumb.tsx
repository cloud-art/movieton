import React from 'react'
import { IThumbProps } from 'react-range/lib/types';
import s from './SliderThumb.module.scss'


interface SliderThumbProps{
    props: IThumbProps;
    isDragged: Boolean;
}

export const SliderThumb: React.FC<SliderThumbProps> = ({props, isDragged}) => {
    return (
        <div
            {...props}
            className={s.thumb}
            style={{...props.style}}
        >
            <div
                className={s.thumbLightner}
                style={{backgroundColor: isDragged ? '#548BF4' : '#CCC'}}
            />
        </div>
    )
}

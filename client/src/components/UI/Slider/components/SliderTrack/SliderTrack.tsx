import React, { ReactNode } from 'react'
import { getTrackBackground } from 'react-range';
import { ITrackProps } from 'react-range/lib/types'
import s from './SliderTrack.module.scss'

interface SliderTrackProps {
    children: ReactNode;
    props: ITrackProps;
    min: number;
    max: number;
    values: number[];
}

export const SliderTrack:React.FC<SliderTrackProps> = ({children, props, min, max, values}) => {
  return (
    <div
        onMouseDown={props.onMouseDown}
        onTouchStart={props.onTouchStart}
        className={s.container}
        style={{...props.style}}
    >
        <div
            ref={props.ref}
            className={s.track}
            style={{
                background: getTrackBackground({
                    values,
                    colors: ['#ccc', '#548BF4', '#ccc'],
                    min: min,
                    max: max,
                }),
            }}
        >
            {children}
        </div>
    </div>
  )
}

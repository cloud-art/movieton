import React, { cloneElement, FC, PropsWithChildren, ReactNode, useEffect, Children, DetailedReactHTMLElement, ReactElement, MutableRefObject } from 'react'
import s from './Carousel.module.scss'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useRef } from 'react'

interface CarouselProps {
    children: ReactNode
}

const PAGE_WIDTH = 450

export const Carousel:FC<CarouselProps> = ({children}) => {
    const [countPages, setCountPages] = useState(React.Children.count(children))
    const [offset, setOffset] = useState(0)
    const windowRef = useRef() as MutableRefObject<HTMLInputElement>

    const handleLeftArrowClick = () => {
        setOffset((offset) => {
            const newOffset = offset + PAGE_WIDTH
            return Math.min(newOffset, 0)
        })
    }

    const handleRightArrowClick = () => {
        setOffset((offset) => {
            const newOffset = offset - PAGE_WIDTH
            var windowWidth = windowRef.current.offsetWidth
            var maxOffset 
            PAGE_WIDTH * countPages < windowWidth? maxOffset = 0 : maxOffset = windowWidth - (PAGE_WIDTH * countPages)
            return Math.max(newOffset, maxOffset)
        })
    }

    return (
        <div className={s.container} ref={windowRef}>
            <FaChevronLeft className={s.arrow} onClick={handleLeftArrowClick}/>
            <div 
                className={s.window}
            >
                <div className={s.pagesContainer}>
                    {
                        Children.map(children, (child ) => {
                            return cloneElement(child as React.ReactElement<any>, {
                                style: {
                                    height: '100%',
                                    minWidth: `${PAGE_WIDTH}px`,
                                    maxWidth: `${PAGE_WIDTH}px`,
                                    transform: `translateX(${offset}px)`,
                                    transition: 'translate',
                                    transitionProperty: 'transform',
                                    transitionDuration: '300ms',
                                    transitionTimingFunction:'ease-in-out'
                                },
                            })
                        })
                    }
                </div>
            </div>
            <FaChevronRight className={s.arrow} onClick={handleRightArrowClick}/>
        </div>
    )
}

import React, { useRef } from 'react'
import s from './Gallery.module.scss'
import Slider from 'react-slick'
import IGalleryCard from '../../types/IGalleryCard';
import GalleryCard from '../GalleryCard/GalleryCard';
import Button from '../UI/Button/Button';
import classNames from 'classnames';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'

type GalleryProps = {
    data: Array<IGalleryCard>;
}

export const Gallery:React.FC<GalleryProps> = ({data}) => {
    const settings = {
        arrows: false,
        rows: 1,
        slidesToShow: 6,
        speed: 500,
        infinite: false,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1096,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 744,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 512,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 392,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    };
    const sliderRef = useRef<Slider>(null)
  return (
    <div className={s.gallery}>
        <div className={s.viewport}>
            <Button className={classNames(s.button, s.buttonPrev)} onClick={() => sliderRef?.current?.slickPrev()}><FiChevronLeft/></Button>
                <Slider ref={sliderRef} className={s.gallerySlider} {...settings}>
                    {data.map((e) => {
                        return(
                            <div key={e.id} className={s.galleryItem}>
                                <GalleryCard
                                    img={e.img}
                                    title={e.title}
                                />
                            </div>   
                        )
                    })}
                </Slider>    
            <Button className={classNames(s.button, s.buttonNext)} onClick={() => sliderRef?.current?.slickNext()}><FiChevronRight/></Button>
        </div>
    </div>
  )
}
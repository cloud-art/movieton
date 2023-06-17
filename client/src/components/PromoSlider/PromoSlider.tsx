import React, { useRef } from 'react'
import Slider from 'react-slick'
import { PromoCard } from '../UI/PromoCard/PromoCard'
import s from './PromoSlider.module.scss'
import Button from '../UI/Button/Button';
import classNames from 'classnames';
import { FiArrowLeft, FiArrowLeftCircle, FiArrowRightCircle, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'
import IPromoCard from '../../types/IPromoCards';


interface PromoSliderProps {
    data: Array<IPromoCard>;
    classname?: string;
}

const PromoSlider: React.FC<PromoSliderProps> = ({data, classname}) => {
    const settings = {
        className: classname,
        dots: true,
        adaptiveHeight: true,
        variableWidth: true,
        focusOnSelect: true,
        centerMode: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        speed: 500,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
                adaptiveHeight: false,
                variableWidth: false,
                slidesToShow: 1,
                centerMode: false,
                slidesToScroll: 1,
            }
          }
        ]
    };
    const sliderRef = useRef<Slider>(null)
  return (
    <div className={s.slider}>
        <Button className={classNames(s.button, s.buttonPrev)} onClick={() => sliderRef?.current?.slickPrev()}><FiChevronLeft/></Button>
            <Slider ref={sliderRef} {...settings}>
                {data.map((e) => {
                    return(
                        <div key={e.id} className={s.promoCard}>
                            <PromoCard 
                                id={e.id}
                                img={e.img}
                                title={e.title}
                                desc={e.desc}
                            />
                        </div>
                    )
                })}          
            </Slider>
        <Button className={classNames(s.button, s.buttonNext)} onClick={() => sliderRef?.current?.slickNext()}><FiChevronRight/></Button>
    </div>
  )
}

export default PromoSlider
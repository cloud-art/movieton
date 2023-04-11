import React, { useRef } from 'react'
import Slider from 'react-slick'
import { PromoCard } from '../PromoCard/PromoCard'
import s from './PromoSlider.module.scss'
import Button from '../Button/Button';
import classNames from 'classnames';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import "./slick.css"; 
import "./slick-theme.css";
import IPromoCard from '../../../types/IPromoCards';


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
        <Button className={classNames(s.button, s.buttonPrev)} onClick={() => sliderRef?.current?.slickPrev()}><FiArrowLeftCircle/></Button>
            <Slider ref={sliderRef} {...settings}>
                {data.map((e) => {
                    return(
                        <div key={e.id} className={s.promoCard}>
                            <PromoCard 
                                img={e.img}
                                title={e.title}
                                desc={e.desc}
                            />
                        </div>
                    )
                })}          
            </Slider>
        <Button className={classNames(s.button, s.buttonNext)} onClick={() => sliderRef?.current?.slickNext()}><FiArrowRightCircle/></Button>
    </div>
  )
}

export default PromoSlider
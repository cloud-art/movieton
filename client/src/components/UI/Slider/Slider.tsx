import React, { ChangeEvent } from 'react'
import { Range } from 'react-range'
import { IRenderThumbParams, IRenderTrackParams } from 'react-range/lib/types'
import { TextField } from '../TextField/TextField'
import { SliderThumb } from './components/SliderThumb/SliderThumb'
import { SliderTrack } from './components/SliderTrack/SliderTrack'
import s from './Slider.module.scss'

interface SliderProps {
    values: number[];
    min: number;
    max: number;
    step?: number;
    onChange: (values: number[]) => void;
}

export const Slider: React.FC<SliderProps> = ({ values, onChange, step, min, max }) => {

    const validateValue = (value: number) => {
        if (value > max){
            return max
        }
        return value
    }

    const handleRenderTrack:React.FC<IRenderTrackParams> = ({props, children}) => {
        return(
            <SliderTrack 
                props={props} 
                values={values} 
                min={min} 
                max={max}
            >
                {children}
            </SliderTrack>
        )
    }
    const handleRenderThumb:React.FC<IRenderThumbParams> = ({props, isDragged, index}) => {
        return(
            <SliderThumb 
                key={index}
                props={props}
                isDragged={isDragged}
            />
        )
    }

    return (
        <div className={s.cointainer}>
            <div className={s.inputs}>
                <TextField
                    label='От'
                    min={min}
                    max={max}
                    className={s.input} 
                    value={values[0]}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        const validatedValue = validateValue(parseInt(e?.target.value) || min)
                        onChange([Math.min(validatedValue, values[1]), values[1]])
                    }}
                />
                <TextField 
                    label='До'
                    min={min}
                    max={max}
                    className={s.input} 
                    value={values[1]}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        const validatedValue = validateValue(parseInt(e?.target.value) || max)
                        onChange([values[0], validatedValue, values[0]])
                    }}
                />
            </div>
            <Range 
                step={step}
                min={min}
                max={max}
                values={values}
                onChange={onChange}
                renderTrack={handleRenderTrack}
                renderThumb={handleRenderThumb}
            />
        </div>
        
    )
}

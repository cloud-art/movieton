import classNames from 'classnames';
import React, { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react'
import s from './TextField.module.scss'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement>{
    label?: string;
    value?: string | number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({ className, label, value, onChange, ...props}, ref) => {
        return (
            <label className={classNames(s.label, className)}>
                {label && <span className={s.title}>{label}</span>}
                <input 
                    ref={ref}
                    className={s.textField}
                    value={value}
                    onChange={onChange}
                    {...props}
                />
            </label>
        )
    }
)
import React from 'react';
import classNames from 'classnames';
import { ChangeEvent, InputHTMLAttributes, forwardRef } from 'react';
import s from './InputText.module.scss';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: boolean;
    variant?: 'dark' | 'light' | 'small';
    errorMessage?: string;
    value?: string | number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(({ className, error = false, errorMessage, value, label, variant, onChange, ...props }, ref) => {
    return (
        <label className={classNames(s.label, className)}>
            {label && <span className={s.caption}>{label}</span>}
            <input
                type="text"
                ref={ref}
                className={classNames(s.inputText, variant === 'dark' && s.dark, variant === 'light' && s.light, variant === 'small' && s.small, error === true && s.error)}
                value={value}
                onChange={onChange}
                {...props}
            />
            {errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
        </label>
    );
});

InputText.displayName = 'InputText';

export default InputText;

import classNames from 'classnames';
import React, { ChangeEvent, TextareaHTMLAttributes, forwardRef } from 'react'
import s from './TextArea.module.scss'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    value: string;
    label?: string;
    classname?: string;
    error?: boolean;
    errorMessage?: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea:React.FC<TextAreaProps> = ({
    value,
    label,
    onChange,
    className,
    error,
    errorMessage,
    ...props
}) => {
    return (
        <label className={classNames(s.label, className)}>
            {label && <span className={s.caption}>{label}</span>}
            <textarea 
                value={value} 
                onChange={onChange} 
                className={s.textArea}
                {...props}
            />
            {errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
        </label>
    )
}

export default TextArea
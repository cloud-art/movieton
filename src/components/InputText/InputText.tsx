import classNames from 'classnames';
import { ChangeEvent, InputHTMLAttributes, forwardRef } from 'react';
import s from './InputText.module.scss';
interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    variant?: 'dark' | 'small';
    value?: string | number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(({ className, error = false, value, variant, onChange, ...props }, ref) => {
    return (
        <label htmlFor="">
            <input
                type="text"
                ref={ref}
                className={classNames(s.inputText, variant === 'dark' && s.dark, variant === 'small' && s.small, error === true && s.error)}
                value={value}
                onChange={onChange}
                {...props}
            />
        </label>
    );
});

export default InputText;

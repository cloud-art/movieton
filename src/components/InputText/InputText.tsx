import classNames from 'classnames';
import { ChangeEvent, InputHTMLAttributes, forwardRef } from 'react';
import s from './InputText.module.scss';
interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    variant?: 'light' | 'small';
    value?: string | number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(({ className, error = false, value, variant, onChange, ...props }, ref) => {
    return (
        <label className={classNames(s.label, className)}>
            <input
                type="text"
                ref={ref}
                className={classNames(s.inputText, variant === 'light' && s.light, variant === 'small' && s.small, error === true && s.error)}
                value={value}
                onChange={onChange}
                {...props}
            />
        </label>
    );
});

InputText.displayName = 'InputText';

export default InputText;

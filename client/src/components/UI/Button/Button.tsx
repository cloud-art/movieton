import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import s from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: 'dark' | 'light';
    startIcon?: React.ReactNode;
}

const Button: React.FunctionComponent<ButtonProps> = ({ 
    className, 
    children, 
    startIcon = null,
    ...props 
}) => {
    return (
        <button 
            className={classNames(s.Button, className? className: '')} 
            {...props}
        >
            {startIcon && <span className={s.startIcon}>{startIcon}</span>}
            {children}
        </button>
    );
};

export default Button;

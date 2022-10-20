import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import s from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({ className, children, ...props }) => {
    return (
        <button className={classNames(s.Button, className)} {...props}>
            {children}
        </button>
    );
};

export default Button;

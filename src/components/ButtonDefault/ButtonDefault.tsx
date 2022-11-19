import classNames from 'classnames';
import { ButtonHTMLAttributes, Children, PropsWithChildren } from 'react';
import Button from '../Button/Button';
import s from './ButtonDefault.module.scss';

interface ButtonDefaultProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'regular';
}

const ButtonDefault: React.FunctionComponent<PropsWithChildren<ButtonDefaultProps>> = ({ children, variant, className, ...props }) => {
    return (
        <Button className={classNames(s.button, variant === 'regular' && s.regular, className)} {...props}>
            {children}
        </Button>
    );
};

export default ButtonDefault;

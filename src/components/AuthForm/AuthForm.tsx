import { FormHTMLAttributes } from 'react';
import s from './AuthForm.module.scss';

const AuthForm = ({ children, ...props }: React.PropsWithChildren<FormHTMLAttributes<HTMLFormElement>>) => {
    return (
        <form action="#" className={s.form} {...props}>
            {children}
        </form>
    );
};

export default AuthForm;

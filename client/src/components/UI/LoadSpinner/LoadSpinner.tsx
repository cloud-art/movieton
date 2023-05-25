import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import s from './LoadSpinner.module.scss';

interface LoadSpinnerProps{
    classname?: string;
}

const LoadSpinner: React.FC<LoadSpinnerProps> = ({classname}) => {
    return (
        <div className={classNames(s.loadSpinner, classname)}>
        </div>
    );
};

export default LoadSpinner;

import React from 'react'
import ReactSelect from 'react-select'
import s from './Select.module.scss'
import classNames from 'classnames';

type SelectValue = {
    label?: string;
    value: string;
}

interface SelectProps {
    options: SelectValue[];
    onChange: (e: unknown) => void
    value: SelectValue | unknown;
    name: string;
    classname?:string;
    label?: string;
    isMulti?: boolean;
}

export const Select:React.FunctionComponent<SelectProps> = ({ 
    name, 
    value, 
    options, 
    onChange,
    classname,
    label,
    isMulti = false
}) => {
    return (
        <label className={classNames(s.label, classname)}>
            {label && <span className={s.caption}>{label}</span>}
            <ReactSelect 
                name={name}
                value={value}
                options={options} 
                noOptionsMessage={() => 'Ничего не найдено!'}
                onChange={(e) => onChange(e)}
                isMulti={isMulti}
            />
        </label>
    )
}

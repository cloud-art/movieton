import React from 'react'
import ReactSelect from 'react-select'
import s from '/Select.module.scss'

type SelectValue = {
    label: string;
    value: string;
}

interface SelectProps{
    options: SelectValue[];
    onChange: (e: unknown) => void
    value: SelectValue | unknown;
    name: string;
}

export const Select:React.FunctionComponent<SelectProps> = ({ name, value, options, onChange }) => {

    return (
        <ReactSelect 
            name={name}
            value={value}
            options={options} 
            noOptionsMessage={() => 'Ничего не найдено!'}
            onChange={(e) => onChange(e)}
        />
    )
}

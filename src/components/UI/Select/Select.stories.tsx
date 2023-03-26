import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select';

export default {
	title: 'Select',
	component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = () => {
    const options = [
        {label: 'option 1', value: 'value 1'},
        {label: 'option 2', value: 'value 2'},
        {label: 'option 3', value: 'value 3'},
        {label: 'option 4', value: 'value 4'},
        {label: 'option 5', value: 'value 5'},
    ]
    
    const [option, setOption] = useState<unknown>(options[0])
    const onChange = (e:unknown) => {setOption(e)}

    return (
        <Select 
            value={option}
            options={options} 
            onChange={onChange}
            name="select"
        />
    )
};

export const Default = Template.bind({});

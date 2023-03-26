import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Slider } from './Slider';

export default {
	title: 'Slider',
	component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = () => {
    const [values, setValues] = useState([0, 50]);

    const onChange = (values: number[]) => {
        setValues(values);
    };

    return (
        <Slider 
            values={values} 
            min={0} 
            max={50}
            onChange={onChange}
        />
    );
};

export const Default = Template.bind({});

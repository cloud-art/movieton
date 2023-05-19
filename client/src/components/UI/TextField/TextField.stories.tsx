import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField } from './TextField';

export default {
	title: 'TextField',
	component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = () => {

    return (
        <TextField
            label='От'
            type="number"
        />
    );
};

export const Default = Template.bind({});

import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CenterMode from './testSlider';

export default {
	title: 'CenterMode',
	component: CenterMode,
} as ComponentMeta<typeof CenterMode>;

const Template: ComponentStory<typeof CenterMode> = () => {

    return (
        <div>
            <CenterMode
                
            />
        </div>
        
    );
};

export const Default = Template.bind({});

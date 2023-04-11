import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PromoSlider from './PromoSlider';

export default {
	title: 'PromoSlider',
	component: PromoSlider,
} as ComponentMeta<typeof PromoSlider>;

const Template: ComponentStory<typeof PromoSlider> = () => {
    const cards = [
        {
            id: 1,
            img: 'https://thumbs.dfs.ivi.ru/storage37/contents/0/a/1d3381c9a1549a24212f58b8c2495b.jpg/1216x524/?q=85',
            title: 'Название',
            desc: 'описание описание описание описание описание описание описаниеописание описание описание описание описание',
        },
        {
            id: 2,
            img: 'https://thumbs.dfs.ivi.ru/storage37/contents/0/a/1d3381c9a1549a24212f58b8c2495b.jpg/1216x524/?q=85',
            title: 'Название',
            desc: 'описание описание описание описание описание описание описаниеописание описание описание описание описание',
        },
        {
            id: 3,
            img: 'https://thumbs.dfs.ivi.ru/storage37/contents/0/a/1d3381c9a1549a24212f58b8c2495b.jpg/1216x524/?q=85',
            title: 'Название',
            desc: 'описание описание описание описание описание описание описаниеописание описание описание описание описание',
        },
        {
            id: 4,
            img: 'https://thumbs.dfs.ivi.ru/storage37/contents/0/a/1d3381c9a1549a24212f58b8c2495b.jpg/1216x524/?q=85',
            title: 'Название',
            desc: 'описание описание описание описание описание описание описаниеописание описание описание описание описание',
        },
    ]


    return (
        <div>
            <PromoSlider data={cards}
            />
        </div>
        
    );
};

export const Default = Template.bind({});

import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PromoCard } from './PromoCard';

export default {
	title: 'PromoCard',
	component: PromoCard,
} as ComponentMeta<typeof PromoCard>;

const Template: ComponentStory<typeof PromoCard> = () => {

    return (
        <div>
            <PromoCard
                img='https://thumbs.dfs.ivi.ru/storage37/contents/0/a/1d3381c9a1549a24212f58b8c2495b.jpg/1216x524/?q=85'
                title='Название'
                desc='описание описание описание описание описание описание описаниеописание описание описание описание описание '
            />
        </div>
        
    );
};

export const Default = Template.bind({});

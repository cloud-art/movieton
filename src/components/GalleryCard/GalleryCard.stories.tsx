import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GalleryCard from './GalleryCard';

export default {
	title: 'GalleryCard',
	component: GalleryCard,
} as ComponentMeta<typeof GalleryCard>;

const Template: ComponentStory<typeof GalleryCard> = () => {

    return (
        <div style={{width: `180px`}}>
            <GalleryCard
                img={"https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85"}
                title={"Губка Боб Квадратные Штаны"}
            />
        </div>
        
    );
};

export const Default = Template.bind({});
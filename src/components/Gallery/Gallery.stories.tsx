import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Gallery} from './Gallery';

export default {
	title: 'Gallery',
	component: Gallery,
} as ComponentMeta<typeof Gallery>;

const Template: ComponentStory<typeof Gallery> = () => {
    const data = [
        {
            id: 1,
            img: "https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85",
            title: "Губка Боб Квадратные Штаны"
        },
        {
            id: 1,
            img: "https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85",
            title: "Губка Боб Квадратные Штаны"
        },
        {
            id: 1,
            img: "https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85",
            title: "Губка Боб Квадратные Штаны"
        },
        {
            id: 1,
            img: "https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85",
            title: "Губка Боб Квадратные Штаны"
        },
        {
            id: 1,
            img: "https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85",
            title: "Губка Боб Квадратные Штаны"
        },
        {
            id: 1,
            img: "https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85",
            title: "Губка Боб Квадратные Штаны"
        },
        {
            id: 1,
            img: "https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85",
            title: "Губка Боб Квадратные Штаны"
        },
    ]

    return (
        <div>
            <Gallery
                data={data}
            />
        </div>
        
    );
};

export const Default = Template.bind({});

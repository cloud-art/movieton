import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Gallery} from './Gallery';

export default {
	title: 'Gallery',
	component: Gallery,
} as ComponentMeta<typeof Gallery>;

const Template: ComponentStory<typeof Gallery> = () => {
    const films = [
        {
            id: 1,
            img: 'https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85',
            title: 'Губка Боб Квадратные Штаны',
            duration: 133,
            year: 2017,
            rating: 7.7,
            genre: "документальный",
        },
        {
            id: 1,
            img: 'https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85',
            title: 'Губка Боб Квадратные Штаны',
            duration: 133,
            year: 2017,
            rating: 7.7,
            genre: "документальный",
        },
        {
            id: 1,
            img: 'https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85',
            title: 'Губка Боб Квадратные Штаны',
            duration: 133,
            year: 2017,
            rating: 7.7,
            genre: "документальный",
        },
        {
            id: 1,
            img: 'https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85',
            title: 'Губка Боб Квадратные Штаны',
            duration: 133,
            year: 2017,
            rating: 7.7,
            genre: "документальный",
        },
        {
            id: 1,
            img: 'https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85',
            title: 'Губка Боб Квадратные Штаны',
            duration: 133,
            year: 2017,
            rating: 7.7,
            genre: "документальный",
        },
        {
            id: 1,
            img: 'https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85',
            title: 'Губка Боб Квадратные Штаны',
            duration: 133,
            year: 2017,
            rating: 7.7,
            genre: "документальный",
        },
        {
            id: 1,
            img: 'https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85',
            title: 'Губка Боб Квадратные Штаны',
            duration: 133,
            year: 2017,
            rating: 7.7,
            genre: "документальный",
        },
    ]

    return (
        <div style={{width: `1260px`}}>
            <Gallery
                films={films}
            />
        </div>
        
    );
};

export const Default = Template.bind({});

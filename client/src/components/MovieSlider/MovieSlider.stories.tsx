import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MovieSlider } from './MovieSlider';

export default {
	title: 'MovieSlider',
	component: MovieSlider,
} as ComponentMeta<typeof MovieSlider>;

const Template: ComponentStory<typeof MovieSlider> = () => {
    const films = [
        {
            id: 1,
            img: 'https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85',
            title: 'Губка Боб Квадратные Штаны',
            duration: `133`,
            year: 2017,
            rating: 7.7,
            genre: {title: "документальный"},
        },
        {
            id: 1,
            img: 'https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85',
            title: 'Губка Боб Квадратные Штаны',
            duration: `133`,
            year: 2017,
            rating: 7.7,
            genre: {title: "документальный"},
        },
        {
            id: 1,
            img: 'https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85',
            title: 'Губка Боб Квадратные Штаны',
            duration: `133`,
            year: 2017,
            rating: 7.7,
            genre: {title: "документальный"},
        },
        {
            id: 1,
            img: 'https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85',
            title: 'Губка Боб Квадратные Штаны',
            duration: `133`,
            year: 2017,
            rating: 7.7,
            genre: {title: "документальный"},
        },
        {
            id: 1,
            img: 'https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85',
            title: 'Губка Боб Квадратные Штаны',
            duration: `133`,
            year: 2017,
            rating: 7.7,
            genre: {title: "документальный"},
        },
        {
            id: 1,
            img: 'https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85',
            title: 'Губка Боб Квадратные Штаны',
            duration: `133`,
            year: 2017,
            rating: 7.7,
            genre: {title: "документальный"},
        },
        {
            id: 1,
            img: 'https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85',
            title: 'Губка Боб Квадратные Штаны',
            duration: `133`,
            year: 2017,
            rating: 7.7,
            genre: {title: "документальный"},
        },
    ]

    return (
        <div style={{width: `1260px`}}>
            <MovieSlider
                films={films}
            />
        </div>
        
    );
};

export const Default = Template.bind({});

import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IFilmCard from '../../../types/IFilm';
import FilmCard from './FilmCard';

export default {
	title: 'GalleryCard',
	component: FilmCard,
} as ComponentMeta<typeof FilmCard>;

const Template: ComponentStory<typeof FilmCard> = () => {
    const film: IFilmCard = {
        id: 1,
        img: 'https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85',
        title: 'Губка Боб Квадратные Штаны',
        duration: '133',
        year: 2017,
        rating: 7.7,
        genre: {id: 1, title: 'Ужасы'},
    }
    return (
        <div style={{width: `180px`}}>
            <FilmCard
                film={film}
            />
        </div>
        
    );
};

export const Default = Template.bind({});

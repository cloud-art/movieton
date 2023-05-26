import { createSlice } from '@reduxjs/toolkit';
import IFilm from '../../types/IFilm';

const initialState: Array<IFilm> = [];

export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        setFilms: (state, action) => {
            state = action.payload
        }
    }
});

export const { setFilms } = filmsSlice.actions;

export const filmsReducer = filmsSlice.reducer;

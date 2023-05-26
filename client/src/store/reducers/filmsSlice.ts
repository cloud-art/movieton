import { createSlice } from '@reduxjs/toolkit';
import { IFilmInfo } from '../../types/IFilm';

const initialState: IFilmInfo = {
    count: 0,
    films: [],
};

export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        setFilms: (state, action) => {
            state.count = action.payload.count
            state.films = [...action.payload.rows]
        }
    }
});

export const { setFilms } = filmsSlice.actions;

export const filmsReducer = filmsSlice.reducer;

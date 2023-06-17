import { createSlice } from '@reduxjs/toolkit';
import { IFilmsInfo } from '../../types/IFilm';

const initialState: IFilmsInfo = {
    count: 1,
    isLoading: false,
    isFetching: false,
    films: [],
};

export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        setFilms: (state, action) => {
            // state.isLoading = true
            // console.log(state.isLoading)
            state.count = action.payload.count
            state.films = [...action.payload.rows]
            // state.isLoading = false
            // console.log(state.isLoading)
        }
    }
});

export const { setFilms } = filmsSlice.actions;

export const filmsReducer = filmsSlice.reducer;

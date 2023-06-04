import { createSlice } from '@reduxjs/toolkit';
import { IFilters } from '../../types/IFilters';

const initialState:IFilters = {
	year: ``,
	rating: '',
	ratingLower: '1',
	ratingUpper: '10',
	sortType: '1',
	genre: '',
};

export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setFiterYear: (state, action) => {
			state.year = action.payload;
		},
		setFilterRating: (state, action) => {
			state.rating = action.payload;
		},
		setFilterRatingLower: (state, action) => {
			state.ratingLower = action.payload;
		},
		setFilterRatingUpper: (state, action) => {
			state.ratingUpper = action.payload;
		},
		setSortType: (state, action) => {
			state.sortType = action.payload;
		},
		setFilterGenre: (state, action) => {
			state.genre = action.payload;
		},
		resetFilter: (state) => {
			state = initialState;
		},
	},
});

export const { setFiterYear, setFilterRating, setFilterRatingLower, setFilterRatingUpper, setSortType, setFilterGenre, resetFilter } =
	filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	page: 1,
    offset: 12
};

export const paginationSlice = createSlice({
	name: 'pagination',
	initialState,
	reducers: {
		setPage: (state, action) => {
			state.page = action.payload;
		},
        setOffset: (state, action) => {
            state.offset = action.payload
        }
	},
});

export const { setPage, setOffset } = paginationSlice.actions;

export const paginationReducer = paginationSlice.reducer;

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { toggleReducer } from './reducers/toggleSlice';
import { searchReducer } from './reducers/searchSlice';
import { userReducer } from './reducers/userSlice';
import { filmsReducer } from './reducers/filmsSlice';
import { paginationReducer } from './reducers/paginationSlice';
import { filtersReducer } from './reducers/filterSlice';

const rootReducer = combineReducers({
    toggleReducer,
    searchReducer,
    userReducer,
    filmsReducer,
    paginationReducer,
    filtersReducer,
});

export const initStore = () => {
    return configureStore({
        reducer: rootReducer
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof initStore>;
export type AppDispatch = AppStore['dispatch'];

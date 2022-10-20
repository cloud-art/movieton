import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { toggleReducer } from './reducers/toggleSlice';

const rootReducer = combineReducers({
    toggleReducer
});

export const initStore = () => {
    return configureStore({
        reducer: rootReducer
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof initStore>;
export type AppDispatch = AppStore['dispatch'];

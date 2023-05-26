import { createSlice } from '@reduxjs/toolkit';
import IUser from '../../types/IUser';

const initialState: IUser = {
    id: 0,
    username: '',
    email: '',
    password: '',
    name: '',
    surname: '',
    role: 'GUEST',
    isAuth: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.id,
            state.username = action.payload.username,
            state.email = action.payload.email,
            state.password = action.payload.password,
            state.name = action.payload.name,
            state.surname = action.payload.surname,
            state.role = action.payload.role,
            state.isAuth = true
        },
        setAuth: (state, action) => {
            if (action.payload === false){
                state.id = initialState.id,
                state.username = initialState.username,
                state.email = initialState.email,
                state.password = initialState.password,
                state.name = initialState.name,
                state.surname = initialState.surname,
                state.role = initialState.role
            }
            state.isAuth = action.payload
        },
    }
});

export const { setUser, setAuth } = userSlice.actions;

export const userReducer = userSlice.reducer;

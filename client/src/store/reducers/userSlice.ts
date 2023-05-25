import { createSlice } from '@reduxjs/toolkit';
import IUser from '../../types/IUser';

const initialState: IUser = {
    id: 0,
    username: 'guest',
    email: 'guest',
    name: 'guest',
    surname: 'guest',
    role: "GUEST",
    isAuth: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.surname = action.payload.surname;
            state.role = action.payload.role;
            state.isAuth = true;
        },
        setAuth: (state, action) => {
            state.isAuth = action.payload
        }
    }
});

export const { setUser, setAuth } = userSlice.actions;

export const userReducer = userSlice.reducer;

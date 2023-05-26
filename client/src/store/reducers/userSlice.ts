import { createSlice } from '@reduxjs/toolkit';
import IUser from '../../types/IUser';

const initialState: { isAuth: boolean, user: IUser} = {
    isAuth: false,
    user: {
        id: 0,
        username: '',
        email: '',
        password: '',
        name: '',
        surname: '',
        role: 'GUEST',
        isAuth: false,
    }
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            state.isAuth = true
        },
        setAuth: (state, action) => {
            if (action.payload === false){
                state.user = initialState.user
            }
            state.isAuth = action.payload
        },
    }
});

export const { setUser, setAuth } = userSlice.actions;

export const userReducer = userSlice.reducer;

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
        role: 'GUEST'
    }
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const newUser:IUser = {
                id: action.payload.id,
                username: action.payload.username,
                email: action.payload.email,
                password: 'action.payload.password',
                name: action.payload.name,
                surname: action.payload.surname,
                role: action.payload.role
            } 
            return{
                ...state,
                user: {...newUser}
            }
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

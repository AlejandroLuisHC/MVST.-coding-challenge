import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type userDataType = {
    id: number;
    login: string;
    avatar_url: string;
    company: string;
    location: string;
    html_url: string;
    followers: number;
    public_repos: number;
}

interface UserState {
    userData: userDataType | boolean;
}

const storedUser = sessionStorage.getItem('user');

const initialState: UserState =
    storedUser
        ? { userData: JSON.parse(storedUser) }
        : { userData: false };

export const userSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        RESTART: (state) => {
            sessionStorage.removeItem('user');
            state.userData = false
        },
        UPDATE: (state, action: PayloadAction<userDataType>) => {
            sessionStorage.setItem('user', JSON.stringify(action.payload));
            state.userData = action.payload;
        }
    },
});

export const { RESTART, UPDATE } = userSlice.actions;

export default userSlice.reducer;
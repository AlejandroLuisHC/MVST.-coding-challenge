import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface GitHubUser {
    login: string;
    id: string;
    avatarUrl: string;
    company: string;
    location: string;
    url: string;
    followers: {
        totalCount: number;
    };
    publicRepositories: {
        totalCount: number;
    };
    privateRepositories: {
        totalCount: number;
    };
}

interface UserState {
    userData: GitHubUser | boolean;
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
        UPDATE: (state, action: PayloadAction<GitHubUser>) => {
            sessionStorage.setItem('user', JSON.stringify(action.payload));
            state.userData = action.payload;
        }
    },
});

export const { RESTART, UPDATE } = userSlice.actions;

export default userSlice.reducer;
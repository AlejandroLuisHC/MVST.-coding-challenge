import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { IGitHubUser } from '../../../api/interfaces/interfaces';

interface UserState {
    userData: IGitHubUser | boolean;
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
        UPDATE: (state, action: PayloadAction<IGitHubUser>) => {
            sessionStorage.setItem('user', JSON.stringify(action.payload));
            state.userData = action.payload;
        }
    },
});

export const { RESTART, UPDATE } = userSlice.actions;

export default userSlice.reducer;
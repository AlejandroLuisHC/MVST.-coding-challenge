import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserState {
    name: string | boolean;
}

const storedUser = sessionStorage.getItem('user');

const initialState: UserState =
   storedUser
        ? { name: JSON.parse(storedUser) }
        : { name: false };

export const userSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        RESTART: (state) => {
            sessionStorage.removeItem('user');
            state.name = false
        },
        UPDATE: (state, action: PayloadAction<string>) => {
            sessionStorage.setItem('user', JSON.stringify(action.payload));
            state.name = action.payload;
        }
    },
});

export const { RESTART, UPDATE } = userSlice.actions;

export default userSlice.reducer;
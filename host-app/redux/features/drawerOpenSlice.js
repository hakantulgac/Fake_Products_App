import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    drawerOpen: false
};

export const drawerOpenSlice = createSlice({
    name: "drawerOpen",
    initialState,
    reducers: {
        open: (state) => {
            state.drawerOpen = true
        },
        close: (state) => {
            state.drawerOpen = false
        }
    }
})

export const { open, close } = drawerOpenSlice.actions;

export default drawerOpenSlice.reducer;
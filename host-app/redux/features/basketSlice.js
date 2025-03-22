import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    basket: []
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.basket = [...state.basket, action.payload];
        },
        removeItemById: (state, action) => {
            state.basket = state.basket.filter(i => action.payload !== i.id);
        },
        resetBasket: (state) => {
            state.basket = [];
        }
    }
})

export const { addItem, removeItemById, resetBasket } = basketSlice.actions;

export default basketSlice.reducer;
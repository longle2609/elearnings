import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    amount: 0,
    selectedCourse: [],
};

export const cartSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        handleIncreaseAmount: (state, action) => {
            state.amount += action.payload;
        },
        handleDecreaseAmount: (state, action) => {
            state.amount -= action.payload;
        },
    },
});

export const { handleIncreaseAmount, handleDecreaseAmount } = cartSlice.actions;

export default cartSlice.reducer;
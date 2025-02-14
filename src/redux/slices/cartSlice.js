import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            // const findItem = state.items.find(obj => obj.id === action.payload)
            // if (findItem) {
            //     findItem.count++
            // } else {
            //     state.items.push({
            //         ... action.payload,
            //         count: 1
            //     })
            // }
            state.items.push(action.payload)
        },
        removeItem(state, action) {
            state.items = state.items.filter(obj => obj.id !== action.payload)
        },
        clearItem(state, action) {
            state.items = []
        }
    }
})

export const {addItem, removeItem, clearItem} = cartSlice.actions;

export default cartSlice.reducer;
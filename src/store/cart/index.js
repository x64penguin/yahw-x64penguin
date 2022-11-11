import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: {},
    },
    reducers: {
        addBook: (state, action) => {
            if (state.cart[action.payload] == undefined) {
                state.cart[action.payload] = 1;
            } else {
                state.cart[action.payload]++;
            }
        },

        removeBook: (state, action) => {
            if (state.cart[action.payload] == undefined) {
                state.cart[action.payload] = 0;
            } else {
                state.cart[action.payload]--;
            }

            if (state.cart[action.payload] == 0) {
                delete state.cart[action.payload];
            }
        }
    }
})
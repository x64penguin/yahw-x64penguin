import { configureStore, createAction, createReducer, createSlice, combineReducers } from "@reduxjs/toolkit"
import { bookSlice } from "./books"
import { categorySlice } from "./categories"
import { reviewSlice } from "./reviews"

export const store = configureStore({
    reducer: combineReducers({
        category: categorySlice.reducer,
        book: bookSlice.reducer,
        review: reviewSlice.reducer
      }),
      middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
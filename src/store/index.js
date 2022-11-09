import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit"
import { bookSlice } from "./books"

export const store = configureStore({
    reducer: combineReducers({
        cinema: bookSlice.reducer,
      }),
      middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
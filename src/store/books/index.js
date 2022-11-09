import { createSlice } from "@reduxjs/toolkit";
import { Statuses } from "../../constants/statuses";

const initialState = {
    entities: {},
    ids: [],
    status: Statuses.idle
}

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        startLoading: (state) => {
            state.status = Statuses.inProgress;
            state.entities = {};
            state.ids = [];
        },

        successLoading: (state, action) => {
            state.status = Statuses.success;
            state.entities = action.data.entities;
            state.ids = action.data.ids;
        },

        failLoading: (state) => {
            state.status = Statuses.failed;
        }
    },
})
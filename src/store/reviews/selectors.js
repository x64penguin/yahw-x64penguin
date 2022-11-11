import { Statuses } from "../../constants/statuses";
import { findAllBackrefs } from "../utils";

export const selectReviewModule = (state) => state.review;

export const selectReviews = (state) => Object.values(selectReviewModule(state).entities);

export const selectReviewById = (state, id) => selectReviewModule(state).entities[id];

export const selectReviewsByBook = (state, id) => {
    return findAllBackrefs(selectReviews(state), id);
}

export const selectReviewsIsLoaded = (state) => selectReviewModule(state).status == Statuses.success;
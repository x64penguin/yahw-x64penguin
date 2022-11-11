import { reviewSlice } from ".";
import { prepareData } from "../utils";
import { selectReviews, selectReviewsIsLoaded } from "./selectors";

export const loadReviews = (dispatch, getState) => {
  if (selectReviewsIsLoaded(getState())) {
    return;
  }

  dispatch(reviewSlice.actions.startLoading());
  fetch("http://localhost:3001/api/reviews")
    .then((response) => response.json())
    .then((reviews) => {
      dispatch(reviewSlice.actions.successLoading(prepareData(reviews)));
    })
    .catch(() => {
      dispatch(reviewSlice.actions.failLoading());
    });
}
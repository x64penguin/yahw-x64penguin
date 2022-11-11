import { selectCategories, selectIsCategoriesLoaded } from "./selectors";
import { categorySlice } from ".";
import { prepareData } from "../utils";

export const loadCategories = (dispatch, getState) => {
  if (selectIsCategoriesLoaded(getState())) {
    return;
  }
  dispatch(categorySlice.actions.startLoading());
  fetch("http://localhost:3001/api/categories")
    .then((response) => response.json())
    .then((categories) => {
      dispatch(categorySlice.actions.successLoading(prepareData(categories)));
    })
    .catch(() => {
      dispatch(categorySlice.actions.failLoading());
    });
}
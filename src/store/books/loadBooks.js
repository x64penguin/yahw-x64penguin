import { selectBooks, selectBooksIsLoaded } from "./selectors";
import { bookSlice } from ".";
import { prepareData } from "../utils";

export const loadBooks = (dispatch, getState) => {
  if (selectBooksIsLoaded(getState())) {
    return;
  }

  dispatch(bookSlice.actions.startLoading());
  fetch("http://localhost:3001/api/books")
    .then((response) => response.json())
    .then((books) => {
      dispatch(bookSlice.actions.successLoading(prepareData(books)));
    })
    .catch(() => {
      dispatch(bookSlice.actions.failLoading());
    });
}
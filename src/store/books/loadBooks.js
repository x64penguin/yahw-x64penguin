import { selectBooks } from "./selectors";

export const loadBooks = (getState, dispatch) => {
    if (selectBooks(getState())?.length > 0) {
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
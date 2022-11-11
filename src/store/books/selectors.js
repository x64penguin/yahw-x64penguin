import { Statuses } from "../../constants/statuses";

export const selectBookModule = (state) => state.book;

export const selectBooks = (state) => Object.values(selectBookModule(state).entities);

export const selectBooksByCategory = (state, categoryId) => {
    let books = [];

    selectBooks(state).forEach((value, index) => {
        if (value.backref == categoryId) { // backref для стандартзации
            books.push(value);
        }
    })

    return books;
}

export const selectBookById = (state, id) => selectBookModule(state).entities[id];

export const selectBooksIsLoaded = (state) => selectBookModule(state).status == Statuses.success;

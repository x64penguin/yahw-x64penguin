export const selectBookModule = (state) => state.book;

export const selectBooks = (state) => Object.values(selectBookModule(state).entities)

export const selectBooksByCategory = (state, categoryId) => {
    let books = [];

    for (book in selectBooks(state)) {
        if (book.backref == categoryId) { // backref для стандартзации
            books.push(book);
        }
    }

    return books;
}

export const selectBookById = (state, id) => selectBookModule(state).entities[id];

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookSlice } from "../store/books";
import { loadBooks } from "../store/books/loadBooks";
import { selectBooksByCategory, selectBooksIsLoaded } from "../store/books/selectors";
import { BookCard } from "./BookCard";

export function Books(props) {
    const {
        activeId
    } = props;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBooks);
    }, []);

    const books = useSelector((state) => selectBooksByCategory(state, activeId));
    const loaded = useSelector((state) => selectBooksIsLoaded(state));

    if (!loaded) {
        return;
    }

    return <main className="catalog">
        {
            books.map((book) => <BookCard key={book.id} book={book}/>)
        }
    </main>;
}
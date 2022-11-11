import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { BookCard } from "../components/BookCard"
import { Review } from "../components/Review"
import { loadBooks } from "../store/books/loadBooks";
import { selectBookById, selectBooks, selectBooksIsLoaded } from "../store/books/selectors";
import { loadReviews } from "../store/reviews/loadReview";
import { selectReviewsByBook, selectReviewsIsLoaded } from "../store/reviews/selectors";

export const BookPage = (props) => {
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBooks);
        dispatch(loadReviews);
    }, [])

    const book = useSelector((state) => selectBookById(state, id));
    const book_id = book == undefined ? "" : book.id;
    const reviews = useSelector((state) => selectReviewsByBook(state, book_id));
    const loaded_books = useSelector((state) => selectBooksIsLoaded(state)) 
    const loaded_reviews = useSelector((state) => selectReviewsIsLoaded(state));

    if (!(loaded_books && loaded_reviews)) {
        return null;
    }

    return <div className="book__wrapper">
        <div className="book-description">
            <BookCard book={book}/>
            <div className="annotation block-default">
                <h2 style={{marginBottom: "1rem"}}>Аннотация</h2>
                <span>{book.annotation}</span>
            </div>
        </div>
        
        <div className="book-reviews">
            {reviews.map((review) => <Review key={review.id} review={review}/>)}
        </div>
    </div>
}
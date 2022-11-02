import { BookCard } from "../components/BookCard"
import { Review } from "../components/Review"

export const BookPage = (props) => {
    return <div className="book__wrapper">
        <div className="book-description">
            <BookCard book={props.book}/>
            <div className="annotation block-default">
                <h2 style={{marginBottom: "1rem"}}>Аннотация</h2>
                <span>{props.book.annotation}</span>
            </div>
        </div>
        
        <div className="book-reviews">
            {props.book.reviews.map((review) => <Review review={review}/>)}
        </div>
    </div>
}
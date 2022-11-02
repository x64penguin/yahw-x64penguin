import { getStars } from "./BookCard"

export const Review = ({review}) => {
    return <div className="review block-default">
        <div>
            <h2>{review.user.name}</h2>
            <div>
                { getStars(review.rating) }
            </div>
        </div>

        <span>
            { review.text }
        </span>
    </div>
}
import star_filled from "../assets/star-filled.svg"
import star_empty from "../assets/star-empty.svg"
import minus_icon from "../assets/minus.svg"
import plus_icon from "../assets/plus.svg"
import { useState } from "react"

// @FIXME
export const getStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) 
        stars.push(<img key={i} style={{marginRight: "7px"}} src={i < rating ? star_filled : star_empty} alt="rating star"/>);
    return stars;
}

export const BookCard = (props) => {
    const [itemAmount, setItemAmount] = useState(0);

    let item_increment = () => {
        setItemAmount(itemAmount + 1);
    }

    let item_decrement = () => {
        setItemAmount(Math.max(itemAmount - 1, 0));
    }

    return <div className="book-card block-default">
        <div className="book-card__description">
            <h2>{props.book.name}</h2>
            <span className="text-light">{ props.book.authors.join(", ") }</span>
            <span className="text-light">{ props.book.genre }</span>
            <div className="book-card__rating">
                {getStars(props.book.rating)}
            </div>
            <h2>{props.book.price}₽</h2>
        </div>
        <div className="book-card__amount">
            <button className="crement-btn" disabled={itemAmount == 0} onClick={item_decrement}>
                <img src={minus_icon} width="18px" height="1.5px"/>
            </button>
            <span>{itemAmount}</span>
            <button className="crement-btn" onClick={item_increment}>
                <img src={plus_icon} width="18px" height="18px"/>
            </button>
        </div>
    </div>
}

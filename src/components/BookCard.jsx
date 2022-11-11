import star_filled from "../assets/star-filled.svg"
import star_empty from "../assets/star-empty.svg"
import minus_icon from "../assets/minus.svg"
import plus_icon from "../assets/plus.svg"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { selectCartBook } from "../store/cart/selectors"
import { cartSlice } from "../store/cart"

export const getStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) 
        stars.push(<img key={i} style={{marginRight: "7px"}} src={i < rating ? star_filled : star_empty} alt="rating star"/>);
    return stars;
}

export const BookCard = (props) => {
    const dispatch = useDispatch();

    const itemIncrement = () => dispatch(cartSlice.actions.addBook(props.book.id));
    const itemDecrement = () => dispatch(cartSlice.actions.removeBook(props.book.id));

    const itemAmount = useSelector((state) => selectCartBook(state, props.book.id));

    return <div className="book-card block-default">
        <div className="book-card__description">
            <Link to={"/book/" + props.book.id}><h2>{props.book.name}</h2></Link>
            <span className="text-light">{ props.book.authors.join(", ") }</span>
            <span className="text-light">{ props.book.genre }</span>
            <div className="book-card__rating">
                {getStars(props.book.rating)}
            </div>
            <h2>{props.book.price}₽</h2>
        </div>
        <div className="book-card__amount">
            <button className="crement-btn" disabled={itemAmount == 0} onClick={itemDecrement}>
                <img src={minus_icon} width="18px" height="1.5px"/>
            </button>
            <span>{itemAmount}</span>
            <button className="crement-btn" onClick={itemIncrement}>
                <img src={plus_icon} width="18px" height="18px"/>
            </button>
        </div>
    </div>
}

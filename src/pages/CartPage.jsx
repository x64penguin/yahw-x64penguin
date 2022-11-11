import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { BookCard } from "../components/BookCard";
import { CartItem } from "../components/CartItem";
import { loadBooks } from "../store/books/loadBooks";
import { selectBookModule, selectBooks } from "../store/books/selectors";
import { selectCart } from "../store/cart/selectors"

function cartTransform(c) {
    let result = [];

    for (const index in c) {
        result.push({book: index, amount: c[index]});
    }

    return result;
}

export const CartPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBooks);
    }, [])

    const books = useSelector((state) => selectBookModule(state).entities);
    const cart = cartTransform(useSelector((state) => selectCart(state).cart));

    if (!books) {
        return null;
    }

    console.log(cart);

    return <div className="cart__layout">
        <div className="cart__list block-default">
            <h2>Ваш заказ:</h2>
            {
                cart.map((item) => {
                    const book = books[item.book];
                    return <CartItem key={item.book} name={book.name} price={book.price * item.amount}/>
                })
            }
            <div className="cart__total">
                <span>Итого: {
                        cart.map((item) => {
                            const book = books[item.book];
                            return book.price * item.amount;
                        }).reduce((sum, a) => sum + a, 0)
                    } ₽</span>
                <button>Купить</button>
            </div>
        </div>
        <div className="cart__books">
            {
                cart.map((item) => {
                    const book = books[item.book];
                    return <BookCard key={item.book} book={book}/>
                })
            }
        </div>
    </div>
}
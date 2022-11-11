export const CartItem = (props) => {
    const {
        name,
        price
    } = props;

    return <div className="cart-item">
        <span>{name}</span>
        <span>{price} ₽</span>
    </div>
}
import cart_icon from "../assets/cart.svg"

export const Layout = (props) => {
    return <div>
        <header>
            <span className="title">Магазин</span>
            <button className="cart"><img src={cart_icon}/></button>
        </header>

        <div className="content">
            { props.children }
        </div>
    </div>
}
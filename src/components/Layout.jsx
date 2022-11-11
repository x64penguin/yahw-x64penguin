import { Link } from "react-router-dom"
import cart_icon from "../assets/cart.svg"

export const Layout = (props) => {
    return <div>
        <header>
            <Link to="/"><span className="title">Магазин</span></Link>
            <Link to="/cart"><img className="cart" src={cart_icon}/></Link>
        </header>

        <div className="content">
            { props.children }
        </div>
    </div>
}
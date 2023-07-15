import React,{useContext} from "react"
import { CartContext } from "../../context/CartContext"

const OrderConfirm = () => {
    const {cart,total,clearCart} = useContext(CartContext)
    
    return(
        <div>
            <div>
                <h3>Tu compra ha sido confirmada</h3>
                <h1>{total}</h1>
                <h2>{cart}</h2>
            </div>
        </div>
    )
}
export default OrderConfirm
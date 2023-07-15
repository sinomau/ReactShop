import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import "./CartItem.css"


const CartItem = ({ id, img, article, quantity, price , }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }
    return (
        <article className='CardCartItem'>
            <div>
                <img src={img} alt={article} />
            </div>
            <div className='article__container'>
                <h4>{article}</h4>
            </div>
            <div>
                <h4>{quantity}</h4>
            </div>
            <div>
                <h4>${price}</h4>
            </div>
            <div>
                <h4>${price * quantity}</h4>
            </div>
            <div>
            <button className='ButtonCartItem' onClick={() => handleRemove(id)}>X</button>
            </div>
        </article>
    )
}

export default CartItem
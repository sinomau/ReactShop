import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className="cart__containerClear">
        <h3>Tu carrito está vacío</h3>
        <Link to="/" className="Btn">
          Ir a comprar!
        </Link>
      </div>
    );
  }

  return (
    <div className="cart__container">
      <h1>Items en el carrito</h1>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <div className="cartDescriptions__container">
        <div className="Total__container">
          <h3>Total: ${total}</h3>
        </div>
        <div className="Clear__container">
          <button onClick={() => clearCart()} className="btn-primary">
            Limpiar carrito
          </button>
        </div>
        <div className="Checkout__button">
          <Link className="btn-primary" to="/checkout">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;

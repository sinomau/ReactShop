import "./CartWidget.css";
import cart from "./assets/img/cart.svg";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="CartWidget">
    <Link to="/cart">
      <img src={cart} alt="cart-widget" className="CartImg" />
      {totalQuantity}
    </Link>
    </div>
  );
};

export default CartWidget;

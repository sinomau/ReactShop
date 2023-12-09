import React from "react";
import "./CartItem.css";
import { useCart } from "../../context/CartContext.js";
import { useNotification } from "../../notification/NotificationService.js";

const CartItem = ({ id, img, article, quantity, price }) => {
  const { removeItem } = useCart();
  const { setNotification } = useNotification();

  const handleRemove = (id) => {
    removeItem(id);
    setNotification("error", `Se elimino correctamente ${article}`);
  };
  return (
    <article className="CardCartItem">
      <div>
        <img src={img} alt={article} />
      </div>
      <div className="article__container">
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
        <button className="ButtonCartItem" onClick={() => handleRemove(id)}>
          X
        </button>
      </div>
    </article>
  );
};

export default CartItem;

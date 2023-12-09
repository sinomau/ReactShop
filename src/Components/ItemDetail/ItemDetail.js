import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useCart } from "../../context/CartContext";
import { useNotification } from "../../notification/NotificationService";

const ItemDetail = ({
  id,
  article,
  img,
  detail,
  price,
  stock,
  
}) => {
  const { addItem, isInCart } = useCart();
  const { setNotification } = useNotification();

  const handleOnAdd = (quantity) => {
    const productToAdd = {
      id,
      article,
      price,
      quantity,
      img,
    };

    addItem(productToAdd);
    setNotification("success", `Se agrego correctamente ${quantity} ${article}`);
  };

  return (
    <div className="itemDetail__container">
      <div className="Header">
        <picture>
          <img src={img} alt={article} className="ItemImg" />
        </picture>
      </div>

      <div className="info__container">
        <h1>{article}</h1>
        <p className="Info">{detail}</p>
        <p className="Info">
          <p>Stock: {stock} Unidades</p>
          Precio: $ {price}
        </p>
        <div className="ItemFooter">
          {!isInCart(id) ? (
            <ItemCount onAdd={handleOnAdd} stock={stock} />
          ) : (
            <Link to={`/cart`}>
              <Button variant="primary">Finalizar Compra</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

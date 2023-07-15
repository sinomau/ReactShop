import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { NotificationContext } from "../../notification/NotificationService";
import Button from "react-bootstrap/Button";

const ItemDetail = ({
  id,
  article,
  img,
  category,
  detail,
  price,
  stock,
  mat,
}) => {
  const { addItem, isInCart } = useContext(CartContext);
  const { setNotification } = useContext(NotificationContext);

  const handleOnAdd = (quantity) => {
    const productToAdd = {
      id,
      article,
      price,
      quantity,
      img,
    };

    addItem(productToAdd);
    setNotification("error", `Se agrego correctamente ${quantity} ${article}`);
    
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
            <Link to={`/cart`}><Button variant="primary">Finalizar Compra</Button></Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

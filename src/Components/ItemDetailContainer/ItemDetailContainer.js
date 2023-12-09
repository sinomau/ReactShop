import React from "react";
import "./ItemDetailContainer.css";
import { useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams, useNavigate } from "react-router-dom";
import useFetchProductsById from "../../hooks/useFetchProductsById.js";

const ItemDetailContainer = () => {
  const { productId } = useParams();
  console.log(productId);
  const navigate = useNavigate();

  // Utiliza el hook específico para obtener el producto por su ID
  const { product, loading } = useFetchProductsById(productId);

  useEffect(() => {
    document.title = loading ? "Cargando" : `Detalle ${product?.name || ""}`;
  }, [loading, product]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product} />
      <div className="">
        <button className="primary" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default ItemDetailContainer;

import React from "react";
import { useParams } from "react-router-dom";
import useFetchProducts from "./../../hooks/useFetchProducts.js";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const { products, loading } = useFetchProducts(categoryId);

  if (loading) {
    return <h1>Cargando productos...</h1>;
  }

  return (
    <div className="itemContainer">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

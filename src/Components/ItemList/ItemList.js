import React from "react";
import Item from "../Item/Item";
import { memo } from "react";

const ItemList = ({ products }) => {
  return (
    <>
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </>
  );
};

export default memo(ItemList);

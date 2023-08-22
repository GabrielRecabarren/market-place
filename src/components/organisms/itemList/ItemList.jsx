import React from "react";
import useStoreApi from "../../../hooks/useStoreApi";
import { ListItem } from "@mui/material";
import Item from "../../molecules/Item";

const ItemList = () => {
  const { data: products, loading, error } = useStoreApi("/products");

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al cargar los datos.</p>;
  }

  return (
    <>
      {products.map((product) => (
        <ListItem key={product.id}>
          <Item product={product} />
        </ListItem>
      ))}
    </>
  );
};

export default ItemList;
 

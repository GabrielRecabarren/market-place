import { ListItem } from "@mui/material";
import { Item } from "../../molecules/Item";
import { ErrorBoundary } from "../../../ErrorBoundary";
import useStoreApi from "../../../hooks/useStoreApi";
import { Loader } from "../../molecules/Loader/Loader";

export const ItemList = () => {
  const { data: products, loading, error } = useStoreApi("products");

  if (loading) {
    return <Loader/>;
  }
  if (error) {
    return <p>Error al cargar los datos</p>;
  }
  return (
    <ErrorBoundary>
      <ListItem
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          gap: 15,
          top: "80px",
          marginBottom: "200px",
        }}
      >
        {products.map((product) => {
          return <Item key={product.id} {...product}></Item>;
        })}
      </ListItem>
    </ErrorBoundary>
  );
};

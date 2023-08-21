import { ListItem } from "@mui/material";
import { Item } from "../../molecules/Item";
import { ErrorBoundary } from "../../../ErrorBoundary";
import fakeProduct from "../../../data/fakeProducts.json"
export const ItemList = ({ onAddToCart }) => {
  return (
    <ErrorBoundary>
      <ListItem>
        <Item item={fakeProduct[0]} onAddToCart={onAddToCart}></Item>
      </ListItem>
    </ErrorBoundary>
  );
};

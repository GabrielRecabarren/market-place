import { ListItem } from "@mui/material";
import { Item } from "../../molecules/Item";
import { ErrorBoundary } from "../../../ErrorBoundary";
import fakeProduct from "../../../data/fakeProducts.json"
export const ItemList = ({ onAddToCart }) => {
  return (
    <ErrorBoundary>
      <ListItem sx={{
        gap: 5,
      }}>
        {fakeProduct.map((product, index) => {
          return <Item key={product.id} {...product} onAddToCart={onAddToCart}></Item>

        })
      }
      </ListItem>
    </ErrorBoundary>
  );
};

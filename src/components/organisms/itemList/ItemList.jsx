import { ListItem } from "@mui/material";
import { Item } from "../../molecules/Item";
import { ErrorBoundary } from "../../../ErrorBoundary";
import useStoreApi from "../../../hooks/useStoreApi";
export const ItemList = ({ onAddToCart }) => {
  const {data: products, loading, error} = useStoreApi("products");
  if (loading) {return <p>Loading...</p>};
  if(error){
    return <p>Error al cargar los datos</p>
  }

  return (
    <ErrorBoundary>
      
      <ListItem sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        gap: 15
        
      }}>
        {products.map((product) => {
          return <Item  key={product.id} {...product} onAddToCart={onAddToCart}></Item>

        })
      }
      </ListItem>
    </ErrorBoundary>
  );
};

export default ItemList;
 

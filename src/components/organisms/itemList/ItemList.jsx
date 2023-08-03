import { ListItem } from "@mui/material";
import {Item} from "../../molecules/Item";
export const ItemList = ({onAddToCart}) => {
  return (
    
    <ListItem>
      <Item onAddToCart={onAddToCart}></Item>
    </ListItem>
    
    
  )
}
 
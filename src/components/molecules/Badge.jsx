import * as React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../context/ShoppingCartContext";

export default function SimpleBadge() {
  const [cart] = React.useContext(CartContext)
  return (
    <Badge badgeContent={cart.length} color="success">
      <ShoppingCartIcon onClick={()=>{console.log(cart)}}/>
    </Badge>
  );
}

import * as React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import { CartContext } from "../../context/CartContext";

export default function SimpleBadge() {
  const cartContext = React.useContext(CartContext);
  return (
    <Badge badgeContent={cartContext} color="success">
      <ShoppingCartIcon />
    </Badge>
  );
}

import * as React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../context/ShoppingCartContext";
import {
  List,
  ListItemStyled,
  ItemImage,
  ItemText,
  ItemPrice,
} from "./cartStyle";
import { Button } from "@mui/material";

export default function SimpleBadge() {
  const [cart] = React.useContext(CartContext);
  const [cardVisibility, setcardVisibility] = React.useState(false);

  const visibilityHandler = () => {
    setcardVisibility(!cardVisibility);
  };

  return (
    <Badge badgeContent={cart.length} color="success">
      <ShoppingCartIcon
        onClick={() => {
          visibilityHandler();
        }}
      />
      {cardVisibility && (
        <List>
          {cart.slice(0, 5).map((item, index) => (
            <ListItemStyled key={index}>
              <ItemImage
                sx={{ width: "10px" }}
                src={item.image}
                alt={item.title}
              />
              <ItemText>
                <div>{item.title}</div>
              </ItemText>
              <ItemPrice>{item.quantity}</ItemPrice>
            </ListItemStyled>
          ))}
          <Button>Vaciar Carro</Button>
          {cart.length > 5 && (
            <ListItemStyled>
              <ItemText>Más elementos disponibles...</ItemText>
            </ListItemStyled>
          )}
        </List>
      )}
    </Badge>
  );
}

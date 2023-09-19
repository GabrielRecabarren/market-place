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
  TotalPrice,
  Buttons,
} from "./cartStyle";
import { Button, Card, Container } from "@mui/material";

export default function SimpleBadge() {
  const [cart, setCart, totalItems, setTotalItems, totalPrice] =
    React.useContext(CartContext);
  const [cardVisibility, setCardVisibility] = React.useState(false);

  const visibilityHandler = () => {
    setCardVisibility(!cardVisibility);
  };

  const resetCartHandler = () => {
    setCart([]);
    setTotalItems(0);
    visibilityHandler();
    
  };

  return (
    <Badge badgeContent={totalItems} color="success">
      <ShoppingCartIcon
        fontSize="large"
        color={cart.length > 0 ? "success" : "error"}
        onClick={() => {
          visibilityHandler();
        }}
      />
      {cardVisibility && (
        <Card
          sx={{
            borderRadius: 5,
          }}
        >
          <List>
            {cart.slice(0, 5).map((item, index) => (
              <ListItemStyled key={index}>
                <ItemImage
                  sx={{ width: "40px" }}
                  src={item.image}
                  alt={item.title}
                />
                <ItemText>
                  <div>{item.title}</div>
                </ItemText>
                <ItemPrice
                  sx={{
                    paddingLeft: 2,
                  }}
                >
                  {item.quantity}
                </ItemPrice>
              </ListItemStyled>
            ))}
            <TotalPrice>{totalPrice}</TotalPrice>
            {cart.length && (
              
              <Buttons>
              
                <Button
               
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    resetCartHandler();
                  }}
                >
                  Vaciar Carro
                </Button>
                <Button variant="contained">Comprar</Button>
              </Buttons>
            )}

            {cart.length > 5 && (
              <ListItemStyled>
                <ItemText>Más elementos disponibles...</ItemText>
              </ListItemStyled>
            )}
          </List>
        </Card>
      )}
    </Badge>
  );
}

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
import { Button, Card, Container } from "@mui/material";

export default function SimpleBadge() {
  const [cart, setCart] = React.useContext(CartContext);
  const [cardVisibility, setcardVisibility] = React.useState(false);

  const visibilityHandler = () => {
    setcardVisibility(!cardVisibility);
  };

  const resetCartHandler = () => {
    setCart([]);
    setTimeout(() => {
      visibilityHandler();
    }, 500);
  };

  return (
    <Badge badgeContent={cart.length} color="success">
      <ShoppingCartIcon
        fontSize="large"
        color={cart.length > 0 ? "success" : "error"}
        onClick={() => {
          visibilityHandler();
        }}
      />
      {cardVisibility && (
        <Card sx={{
          borderRadius:5,
        }}>

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
          {cart.length && (
            <>
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
            </>
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

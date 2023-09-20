import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../context/ShoppingCartContext";

export const Item = ({ title, image, price }) => {
  const [cart, setCart, totalItems, setTotalItems] = useContext(CartContext);

  // Función para agregar un elemento al carrito o actualizar la cantidad
  const handleAddToCartClick = () => {
    const newItem = {
      title: title,
      image: image,
      price: price,
      quantity: 1,
    };

    // Verificar si el elemento ya está en el carrito
    const existingItem = cart.find((item) => item.title === title);

    if (existingItem) {
      // Si el elemento ya está en el carrito, actualiza la cantidad
      const updatedCart = cart.map((item) => {
        if (item.title === title) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      // Si el elemento no está en el carrito, agrégalo con cantidad 1
      setCart([...cart, { ...newItem, quantity: 1 }]);
    }
    setTotalItems(totalItems + 1);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        width: 200,
        background: "rgba( 199, 67, 67, 0.18 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 0px )",
        WebkitBackdropFilter: "blur( 0px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
        "&:hover": {
          transform: "scale(1.1)", // Cambia el tamaño de la imagen al hacer hover
          transition: "transform 0.3s ease", // Agrega una transición suave
        },
      }}
    >
      <CardContent>
        <Typography variant="p" color="text.primary" gutterBottom>
          {title.length > 30 ? `${title.substring(0, 30)}...` : title}
        </Typography>
        <CardMedia
          component="img"
          sx={{ height: 200, objectFit: "scale-down" }}
          image={image}
          title={title}
        />
      </CardContent>
      <CardActions>
        <Button size="small">${price}</Button>
        <Button variant="contained" onClick={handleAddToCartClick}>
          Add Item
        </Button>
      </CardActions>
    </Card>
  );
};
export default Item;

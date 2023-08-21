import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

export const Item = ({id, name, img, price, onAddToCart}) => {
  
  const handleAddToCartClick = (item) => {
    console.log(item);
    onAddToCart(item);
  };
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" color="text.primary" gutterBottom>
          {name}
        </Typography>
        <CardMedia
          sx={{ height: 140 }}
          image={img}
          title={name}
        />
      </CardContent>
      <CardActions>
        <Button size="small">${price}</Button>
        <Button variant="contained" onClick={()=> handleAddToCartClick(name)}>Add Item</Button>
      </CardActions>
    </Card>
  );
};

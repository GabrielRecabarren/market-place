import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

export const Item = ({item, onAddToCart}) => {
  
  const handleAddToCartClick = (item) => {
    console.log(item);
    onAddToCart(item);
  };
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" color="text.primary" gutterBottom>
          {item.name}
        </Typography>
        <CardMedia
          sx={{ height: 140 }}
          image={item.img}
          title={item.name}
        />
      </CardContent>
      <CardActions>
        <Button size="small">${item.price}</Button>
        <Button variant="contained" onClick={()=> handleAddToCartClick(item)}>Add Item</Button>
      </CardActions>
    </Card>
  );
};

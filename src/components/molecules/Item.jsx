import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

export const Item = ({id, title, image, price, onAddToCart}) => {
  
  const handleAddToCartClick = (item) => {
    console.log(item);
    onAddToCart(item);
  };
  return (
    <Card variant="outlined" sx={{width:200}}>
      <CardContent>
        <Typography variant="p" color="text.primary" gutterBottom>
          {title.length > 30 ? `${title.substring(0,30)}...` : title}
        </Typography>
        <CardMedia
          sx={{ height: 200, width:200}}
          image={image}
          title={title}
        />
      </CardContent>
      <CardActions>
        <Button size="small">${price}</Button>
        <Button variant="contained" onClick={()=> handleAddToCartClick(title)}>Add Item</Button>
      </CardActions>
    </Card>
  );
};
export default Item;

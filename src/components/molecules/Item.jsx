import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

<<<<<<< HEAD
const Item = ({ product:{ title, image, price}}) => {
=======
export const Item = ({id, title, image, price, onAddToCart}) => {
  
  const handleAddToCartClick = (item) => {
    console.log(item);
    onAddToCart(item);
  };
>>>>>>> main
  return (
    <Card variant="outlined" sx={{width:200}}>
      <CardContent>
<<<<<<< HEAD
        <Typography variant="h5" color="text.primary" gutterBottom>
          {Item.title}
        </Typography>
        <CardMedia
          sx={{ height: 140 }}
          image= { product.image}
          title="green iguana"
        />
      </CardContent>
      <CardActions>
        <Button size="small"> {product.price} </Button>
        <Button variant="contained">Add Item</Button>
=======
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
>>>>>>> main
      </CardActions>
    </Card>
  );
};
export default Item;

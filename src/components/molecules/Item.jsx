import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

export const Item = ({onAddToCart}) => {
  const handleAddToCartClick = (item) => {
    console.log(item);
    onAddToCart(item);
  };
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" color="text.primary" gutterBottom>
          Product Name
        </Typography>
        <CardMedia
          sx={{ height: 140 }}
          image="src/img/example/store.png"
          title="example"
        />
      </CardContent>
      <CardActions>
        <Button size="small">$0.00</Button>
        <Button variant="contained" onClick={()=> handleAddToCartClick("hola")}>Add Item</Button>
      </CardActions>
    </Card>
  );
};

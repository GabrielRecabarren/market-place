import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

const Item = ( {title, price, image}) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" color="text.primary" gutterBottom>
          {Item.title}
        </Typography>
        <CardMedia
          sx={{ height: 140 }}
          image= { image}
          title="green iguana"
        />
      </CardContent>
      <CardActions>
        <Button size="small"> {price} </Button>
        <Button variant="contained">Add Item</Button>
      </CardActions>
    </Card>
  );
};
export default Item;

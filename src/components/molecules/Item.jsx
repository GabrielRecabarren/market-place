import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

export const Item = () => {
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
        <Button variant="contained">Add Item</Button>
      </CardActions>
    </Card>
  );
};

import SearchBar from "../../atoms/SearchBar";
import { Grid } from "@mui/material";
import Cart from "../../atoms/Cart";
export const Header = () => {
  return (
    <Grid container>
      <Grid item sm={2}>
        
      </Grid>
      <Grid item xs={6}>
        <SearchBar />
      </Grid>
      <Grid item xs={2}>
        <Cart />
      </Grid>
    </Grid>
  );
};

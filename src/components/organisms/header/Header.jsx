import SearchBar from "../../atoms/SearchBar";
import { Grid } from "@mui/material";
import SimpleBadge from "../../molecules/Badge";



export const Header = () => {
  return (
    <Grid sx={{
      position:"fixed",
      zIndex:999,
      height:"70px",    
      border: "solid 2px"
    }} container>
      <Grid item sm={2}>
        
      </Grid>
      <Grid item xs={6}>
        <SearchBar />
      </Grid>
      <Grid sx={{
        marginTop:"10px",
        cursor:"pointer"
      }} item xs={4}>
        <SimpleBadge />
      </Grid>
    </Grid>
  );
};

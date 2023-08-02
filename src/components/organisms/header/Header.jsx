import SearchBar from "../../atoms/SearchBar"
import { Grid } from "@mui/material"
import { Logo } from "../../atoms/Logo"
import Cart from "../../atoms/Cart";
export const Header = () => {
  return (<Grid container>
      

    <Grid item sm={2}>
      <Logo/>
    </Grid>
    <Grid item xs={6}>
  <SearchBar/>
    </Grid>
    <Grid item xs={2}>
      
      <Cart/>
    </Grid>
  </Grid>
  )
}
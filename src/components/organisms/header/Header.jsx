import SearchBar from "../../atoms/SearchBar"
import { Grid } from "@mui/material"
import { Logo } from "../../atoms/Logo"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export const Header = () => {
  return (<Grid container>
      

    <Grid item sm={2}>
      <Logo/>
    </Grid>
    <Grid item xs={6}>
  <SearchBar/>
    </Grid>
    <Grid item xs={2}>
      <ShoppingCartIcon  color="success"/>
    </Grid>
  </Grid>
  )
}

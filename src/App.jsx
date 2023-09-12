import { Box, Grid } from "@mui/material";
import { Header } from "./components/organisms/header/Header";
import { ItemList } from "./components/organisms/itemList/ItemList";
import Footer from "./components/organisms/footer/Footer";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Grid container>
        <Grid item xs={12}>
          <Box border={2}>
            <Header />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box border={2}>
            <ItemList />
          </Box>
        </Grid>
        <Grid item xs={12} sx={
          {
            display: "flex",
            justifyContent: "center"
          }
        }>
          <Footer />
        </Grid>
      </Grid>
    </ShoppingCartProvider>
  );
}

export default App;

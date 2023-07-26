import { Box, Grid } from "@mui/material";
import { Header } from "./components/organisms/header/Header";
import { ItemList } from "./components/organisms/itemList/ItemList";
import Footer from "./components/organisms/footer/Footer";

function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box border={2}>
          <Header></Header>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box border={2}>
          <ItemList></ItemList>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box border={2}>
          <Footer></Footer>
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;

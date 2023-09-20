import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { Header } from "./components/organisms/header/Header";
import { ItemList } from "./components/organisms/itemList/ItemList";
import CategorySelector from "./components/organisms/category/CategorySelector";
import Footer from "./components/organisms/footer/Footer";
<<<<<<< HEAD

function App() {
	const [cartItems, setCartItems] = useState([]);
	const [cartItemCount, setCartItemCount] = useState(1);

	const handleAddToCart = (item) => {
		setCartItems((prevItems) => [...prevItems, item]);
		setCartItemCount((prevCount) => prevCount + 1);
		console.log(cartItemCount);
	};
	return (
		<Grid container>
			<Grid item xs={12}>
				<Box border={2}>
					<Header cartItems={cartItems} cartItemCount={cartItemCount} />
				</Box>
				<Grid item xs={12}>
					<Box border={2}>
						<CategorySelector />
					</Box>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<Box border={2}>
					<ItemList onAddToCart={handleAddToCart} />
				</Box>
			</Grid>
			<Grid item xs={12}>
				<Box border={2}>
					<Footer />
				</Box>
			</Grid>
		</Grid>
	);
=======
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
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Footer />
        </Grid>
      </Grid>
    </ShoppingCartProvider>
  );
>>>>>>> 4f3fe9028ab8883ad2ad0ef98870879b904213e8
}

export default App;

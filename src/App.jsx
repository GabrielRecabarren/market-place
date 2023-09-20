import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { Header } from "./components/organisms/header/Header";
import ItemList from "./components/organisms/itemList/ItemList";
import Footer from "./components/organisms/footer/Footer";


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
}

export default App;

import React, { useState } from "react";
import useAllCategories from "../../../hooks/useAllCategories";
import useProductsByCategory from "../../../hooks/useProductsByCategory"; // Importa el hook
import { Select, MenuItem, CircularProgress } from "@mui/material";

const CategorySelector = () => {
	const [selectedCategory, setSelectedCategory] = useState("");
	const {
		categories,
		loading: categoriesLoading,
		error: categoriesError,
	} = useAllCategories();

	// Usa el hook useProductsByCategory con la categoría seleccionada
	const {
		products,
		loading: productsLoading,
		error: productsError,
	} = useProductsByCategory(selectedCategory);

	const handleCategoryChange = (event) => {
		setSelectedCategory(event.target.value);
	};

	return (
		<div>
			<Select value={selectedCategory} onChange={handleCategoryChange}>
				<MenuItem value="">
					<em>None</em>
				</MenuItem>
				{categories.map((category) => (
					<MenuItem key={category} value={category}>
						{category}
					</MenuItem>
				))}
			</Select>

			{(categoriesLoading || productsLoading) && <CircularProgress />}
			{(categoriesError || productsError) && (
				<p>Error: {(categoriesError || productsError).message}</p>
			)}

			<div>
				{products.map((product) => (
					<div key={product.id}>
						<h3>{product.title}</h3>
						<p>{product.description}</p>
						<p>${product.price}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default CategorySelector;

import React, { useState } from "react";
import useAllCategories from "../../../hooks/useAllCategories";
import useProductsByCategory from "../../../hooks/useProductsByCategory";
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
			{categoriesError && renderError(categoriesError)}
			{productsError && renderError(productsError)}

			<div>
				{products.map((product) => {
					const { title, description, price, id } = product;
					return (
						<div key={id}>
							<h3>{title}</h3>
							<p>{description}</p>
							<p>${price}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CategorySelector;

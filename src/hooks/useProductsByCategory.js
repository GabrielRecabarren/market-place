import { useState, useEffect } from "react";
import useStoreApi from "./useStoreApi";

const useProductsByCategory = (category) => {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await useStoreApi.get(
					`/products/category/${category}`
				);

				if (Array.isArray(response.data)) {
					setProducts(response.data);

					// Suponiendo que cada producto tiene una propiedad 'category'
					const uniqueCategories = [
						...new Set(response.data.map((product) => product.category)),
					];
					setCategories(uniqueCategories);
				} else {
					console.error("La API no devolvió un array");
					setProducts([]);
					setCategories([]);
				}

				setLoading(false);
			} catch (err) {
				setError(err);
				setLoading(false);
			}
		};

		fetchProducts();
	}, [category]);

	return { products, categories, loading, error };
};

export default useProductsByCategory;

// hooks/useAllCategories.js
import { useState, useEffect } from "react";
import useStoreApi from "./useStoreApi";

const useAllCategories = () => {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await useStoreApi.get(`/products/categories`);

				if (Array.isArray(response.data)) {
					setCategories(response.data);
				} else {
					console.error("La API no devolvió un array");
					setCategories([]);
				}

				setLoading(false);
			} catch (err) {
				setError(err);
				setLoading(false);
			}
		};

		fetchCategories();
	}, []);

	return { categories, loading, error };
};

export default useAllCategories;

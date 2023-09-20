import { useState, useEffect } from "react";
import apiInstance from "../api/useApi";

// Hook personalizado para obtener datos de la API de FakeStore
function useStoreApi(endpoint) {
	// Estado para almacenar los datos obtenidos de la API
	const [data, setData] = useState([]);
	// Estado para controlar si la carga está en progreso
	const [loading, setLoading] = useState(true);
	// Estado para manejar errores
	const [error, setError] = useState(null);

  useEffect(() => {
    console.log(`useStoreApi: Fetching data from endpoint: ${endpoint}`);
    // Función para obtener los datos de la API
    const fetchData = async () => {
      try {
        console.log("useStoreApi: Fetching data...");
        const response = await useApi.get(endpoint);
        setData(response.data);
       
        console.log("useStoreApi: Data fetched successfully:", response.data);
      } catch (error) {
        setError(error);
        console.error("useStoreApi: Error fetching data:", error);
      } finally {
        setTimeout(() => {
          
          setLoading(false);
        }, 2500);
        console.log("useStoreApi: Fetching data complete.");
      }
    };

		fetchData();
	}, [endpoint]);

	// Devolver el resultado del hook
	return { data, loading, error };
}

export default useStoreApi;

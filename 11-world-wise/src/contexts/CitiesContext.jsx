/* eslint-disable react-refresh/only-export-components */
import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const BASE_URL = "http://localhost:8000";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  // We need cities data for another comps so use it in App
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        if (!res.ok) throw new Error("Failed to fetch cities");
        setCities(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      if (!res.ok) throw new Error("Failed to fetch cities");
      setCurrentCity(data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  // Returning Provider to wrap whole app into it to accessible all props
  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

// Consuming CitiesContext by useContext and created our own hook.
function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside of CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };

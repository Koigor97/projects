/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

const CitiesContext = createContext();

export function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const URL = `http://localhost:8000`;

  // loading the cities data from the data file
  useEffect(function () {
    async function fetchCities() {
      setIsLoading(true);
      try {
        const res = await fetch(`${URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        (err) => {
          alert(err.messsage + ": There was an error loading the data");
        };
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <CitiesContext.Provider value={{ cities, isLoading }}>
      {children}
    </CitiesContext.Provider>
  );
}

export function useCities() {
  return useContext(CitiesContext);
}

// const [cities, setCities] = useState([]);
// const [isLoading, setIsLoading] = useState(false);

// // loading the cities data from the data file
// useEffect(function () {
//   async function fetchCities() {
//     setIsLoading(true);
//     try {
//       const res = await fetch(`${URL}/cities`);
//       const data = await res.json();
//       setCities(data);
//     } catch {
//       (err) => {
//         alert(err.messsage + ": There was an error loading the data");
//       };
//     } finally {
//       setIsLoading(false);
//     }
//   }
//   fetchCities();
// }, []);

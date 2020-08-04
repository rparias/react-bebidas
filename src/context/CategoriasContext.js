import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create context to use in other files
export const CategoriasContext = createContext();

// Provider es donde se encuentran las funciones y el state
const CategoriasProvider = (props) => {
  // Create state for context
  const [categories, setCategories] = useState([]);

  // API call with useEffect
  useEffect(() => {
    const getCategories = async () => {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
      const categories = await axios.get(url);
      setCategories(categories.data.drinks);
    };
    getCategories();
  }, []);

  // Return available objects in the value provider for all components
  return (
    <CategoriasContext.Provider value={{ categories }}>
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState({
    ingrediente: '',
    categoria: '',
  });
  const [hasData, setHasData] = useState(false);

  const { ingrediente, categoria } = search;

  useEffect(() => {
    if (hasData) {
      const getRecipes = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}&c=${categoria}`;
        const recipes = await axios.get(url);
        setRecipes(recipes.data.drinks);
      };
      getRecipes();
    }
  }, [search]);

  return (
    <RecetasContext.Provider value={{ recipes, setSearch, setHasData }}>
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;

import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [idRecipe, setIdRecipe] = useState(null);
  const [recipeDetail, setRecipeDetail] = useState({});

  // if we get the idRecipe, we can call the API
  useEffect(() => {
    const getRecipe = async () => {
      if (!idRecipe) return;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;
      const recipe = await axios.get(url);
      setRecipeDetail(recipe.data.drinks[0]);
    };
    getRecipe();
  }, [idRecipe]);

  return (
    <ModalContext.Provider
      value={{ recipeDetail, setIdRecipe, setRecipeDetail }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

import React, { createContext, useState } from 'react';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [recipe, setRecipe] = useState([]);
  const [search, searchRecipe] = useState({
    nombre: '',
    categoria: '',
  });

  return (
    <RecetasContext.Provider value={{ searchRecipe }}>
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;

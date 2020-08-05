import React, { createContext, useState } from 'react';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState({
    ingrediente: '',
    categoria: '',
  });

  return (
    <RecetasContext.Provider value={{ setSearch }}>
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;

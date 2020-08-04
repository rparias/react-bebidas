import React, { createContext, useState } from 'react';

// Create context to use in other files
export const CategoriasContext = createContext();

// Provider es donde se encuentran las funciones y el state
const CategoriasProvider = (props) => {
  // Create state for context
  const [hola, saveHola] = useState('hola desde el provider');

  // Return available objects in the value provider for all components
  return (
    <CategoriasContext.Provider value={{ hola }}>
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;

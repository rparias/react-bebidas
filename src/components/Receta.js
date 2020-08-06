import React from 'react';

const Receta = ({ recipe }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{recipe.strDrink}</h2>
        <img
          className="card-img-top"
          src={recipe.strDrinkThumb}
          alt={`Imagen de ${recipe.strDrink}`}
        />
        <div className="card-body">
          <button className="btn btn-block btn-primary">Ver Receta</button>
        </div>
      </div>
    </div>
  );
};

export default Receta;

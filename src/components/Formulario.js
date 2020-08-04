import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {
  const { categories } = useContext(CategoriasContext);
  const { searchRecipe } = useContext(RecetasContext);

  const [search, setSearch] = useState({
    nombre: '',
    categoria: '',
  });

  const handleOnChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    searchRecipe(search);
  };

  return (
    <form onSubmit={handleOnSubmit} className="col-12">
      <fieldset className="text-center">
        <legend>Busca categorias por Categoria o Ingredientes</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Buscar por Ingrediente"
            onChange={handleOnChange}
          />
        </div>
        <div className="col-md-4">
          <select
            name="categoria"
            id="categoria"
            className="form-control"
            onChange={handleOnChange}
          >
            <option value="">-- Seleccione Categoria --</option>
            {categories.map((category) => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Bebidas"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;

import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';

const Formulario = () => {
  const { categories } = useContext(CategoriasContext);

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

  return (
    <form action="submit" className="col-12">
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

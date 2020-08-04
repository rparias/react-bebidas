import React from 'react';

const Formulario = () => {
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
          />
        </div>
        <div className="col-md-4">
          <select name="categoria" id="categoria" className="form-control">
            <option value="">-- Seleccione Categoria --</option>
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

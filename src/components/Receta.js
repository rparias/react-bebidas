import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Receta = ({ recipe }) => {
  const { recipeDetail, setIdRecipe, setRecipeDetail } = useContext(
    ModalContext
  );

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIdRecipe(null);
    setRecipeDetail({});
  };

  const handleOnClick = () => {
    setIdRecipe(recipe.idDrink);
    handleOpen();
  };

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
          <button className="btn btn-block btn-primary" onClick={handleOnClick}>
            Ver Receta
          </button>
          <Modal open={open} onClose={handleClose}>
            <div style={modalStyle} className={classes.paper}>
              <h2>{recipeDetail.strDrink}</h2>
              <h3 className="mt-4">Instrucciones</h3>
              <p>{recipeDetail.strInstructions}</p>
              <img
                src={recipeDetail.strDrinkThumb}
                alt="Drink Thumb"
                className="img-fluid"
              />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Receta;

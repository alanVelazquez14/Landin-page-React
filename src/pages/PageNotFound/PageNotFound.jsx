import React from "react";
import { Button, NotFoundContainerStyled } from "./PageNotFoundStyled";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <NotFoundContainerStyled>
        <h1> - PÁGINA NO ENCONTRADA -</h1>

        <p>
          Parece que la página que intentaste buscar no existe o no se pudo
          encontrar.
        </p>
        <Link to="/">
          <Button>Volver al inicio</Button>
        </Link>
      </NotFoundContainerStyled>
    </div>
  );
};

export default PageNotFound;

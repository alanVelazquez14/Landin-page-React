import React from "react";
import { Button, ButtonContainer, Card } from "./CardsRecomendadosStyled";
import { Link } from "react-router-dom";

const CardsRecomendacion = ({ nombre, precio, descripcion, img }) => {
  return (
    <>
      <Card>
        <img src={img} alt={nombre} />
        <div>
          <h2>{nombre}</h2>
          <div>
            <p>{descripcion}</p>
            <span>$ {precio}</span>
          </div>
        </div>
        <ButtonContainer>
          <Button>Agregar</Button>
          <Link to="/products">
            <Button>Ver Más</Button>
          </Link>
        </ButtonContainer>
      </Card>
    </>
  );
};

export default CardsRecomendacion;

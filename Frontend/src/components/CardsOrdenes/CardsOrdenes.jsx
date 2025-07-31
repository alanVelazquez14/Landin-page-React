import React from "react";
import {
  CardsInfoStyled,
  CardsOrdenesContainerStyled,
  LoadStyled,
} from "./CardsOrdenesStyled";
import { PiClockBold } from "react-icons/pi";

const CardsOrdenes = ({ _id, total, createdAt }) => {
  return (
    <CardsOrdenesContainerStyled>
      <CardsInfoStyled>
        <h4>Código del pedido: # {_id}</h4>
        <span>$ {total.toFixed(2)}</span>
        <p>Fecha: {new Date(createdAt).toLocaleDateString()}</p>
      </CardsInfoStyled>
      <LoadStyled>
        <PiClockBold />
      </LoadStyled>
    </CardsOrdenesContainerStyled>
  );
};

export default CardsOrdenes;

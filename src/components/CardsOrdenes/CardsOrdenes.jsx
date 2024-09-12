import React from "react";
import {
  CardsInfoStyled,
  CardsOrdenesContainerStyled,
  LoadStyled,
} from "./CardsOrdenesStyled";
import { PiClockBold } from "react-icons/pi";

const CardsOrdenes = () => {

  return (
    <CardsOrdenesContainerStyled>
      <CardsInfoStyled>
        <h4>Código del pedido: # 12351</h4>

        <span> $ 15200.25</span>
      </CardsInfoStyled>
      <LoadStyled>
        <PiClockBold />
      </LoadStyled>
    </CardsOrdenesContainerStyled>
  );
};

export default CardsOrdenes;

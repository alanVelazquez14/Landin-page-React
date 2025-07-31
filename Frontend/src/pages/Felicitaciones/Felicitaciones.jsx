import React from "react";
import {
  ButtonStyled,
  FelicitacionesContainerStyled,
} from "./FelicitacionesStyled";
import { useNavigate } from "react-router-dom";

const Felicitaciones = () => {
  const navigate = useNavigate();
  return (
    <FelicitacionesContainerStyled>
      <h1>- Gracias por tu compra -</h1>
      <img src="img/Productos/felicitaciones.png" alt="" />
      <p>Tu pedido fue realizado con exito</p>
      <p>En unos minutos te llegará el seguimiento del pedido</p>

      <ButtonStyled onClick={() => navigate("/mis-ordenes")}>
        Volver
      </ButtonStyled>
    </FelicitacionesContainerStyled>
  );
};

export default Felicitaciones;

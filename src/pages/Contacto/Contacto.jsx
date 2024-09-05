import React from "react";
import { ContactoContainerStyled } from "./ContactoStyled";
import Formulario from "../../components/Formulario/Formulario";

const Contacto = () => {
  return (
    <>
      <ContactoContainerStyled>
        <h4>- CONTÁCTANOS -</h4>
        <h1>DEJANOS TU CONSULTA O COMENTARIO</h1>
      </ContactoContainerStyled>
      <Formulario />
    </>
  );
};

export default Contacto;

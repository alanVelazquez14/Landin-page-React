import React from "react";
import {
  LinkNosotrosStyled,
  NosotrosContainerStyled,
  TextContainerStyled,
} from "./NosotrosResumenStyted";
import { Link } from "react-router-dom";

const NosotrosResumen = () => {
  return (
    <NosotrosContainerStyled>
      <h1>Conocé sobre nuestra historia</h1>
      <TextContainerStyled>
        <p>
          Desde 2006, en <span>Home Burger Bar </span>nos hemos dedicado a
          demostrar que una hamburguesa puede ser sana y de calidad, sin
          sacrificar sabor.
        </p>
        <p>
          Nuestro chef desarrolló una receta de hamburguesas gourmet de estilo
          casero, llenas de sabor, pan de elaboración propia y salsas
          especiales.
        </p>
        <p>
          En <span>Home Burguer Bar</span> estamos en esos pequeños detalles,
          brindándote una cálida experiencia para que te sientas comiendo en
          casa.
        </p>
      </TextContainerStyled>
      <div>
        <span>
          Querés saber más sobre nosotros?{" "}
          <Link to="/nosotros">
            <LinkNosotrosStyled>Hace click acá</LinkNosotrosStyled>
          </Link>{" "}
        </span>
      </div>
    </NosotrosContainerStyled>
  );
};

export default NosotrosResumen;

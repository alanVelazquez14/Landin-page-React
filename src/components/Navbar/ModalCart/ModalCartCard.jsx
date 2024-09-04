import React from "react";
import { CardTitleStyled, DescStyled, PriceStyled, ProductContainerStyled, TextContainerStyled } from "./ModalCartStyled";

const ModalCartCard = ({ img, nombre, descripcion, precio, quantity, id }) => {
  return (
    <>
      <ProductContainerStyled>
        <img src={img} alt={nombre} />
        <TextContainerStyled>
          <CardTitleStyled>{nombre}</CardTitleStyled>
          <DescStyled>{descripcion}</DescStyled>
          <PriceStyled>$ {precio}</PriceStyled >
        </TextContainerStyled>
      </ProductContainerStyled>
    </>
  );
};

export default ModalCartCard;

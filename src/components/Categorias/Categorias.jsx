import React from "react";
import { CategoryContainerStyled } from "./CategoriasStyled";

const Categorias = ({ title, img }) => {
  return (
    <CategoryContainerStyled>
      <h4>
        <span>-</span> {title} <span>-</span>
      </h4>
      <img src={img} alt={title} />
    </CategoryContainerStyled>
  );
};

export default Categorias;

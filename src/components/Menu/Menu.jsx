import React from "react";
import { ContainerP, PrecioStyled, ProductosContainerStyled } from "./MenuStyled";

const Productos = ({ id, nombre, precio, descripcion, categorias, img }) => {
  return (
    <ProductosContainerStyled>
      <img src={img} alt={nombre} />
      <h4>{nombre}</h4>
      <ContainerP>
        <p>{descripcion}</p>
      </ContainerP>
      <PrecioStyled>
        <span>$ {precio}</span>
        <button>Agregar</button>
      </PrecioStyled>
    </ProductosContainerStyled>
  );
};

export default Productos;

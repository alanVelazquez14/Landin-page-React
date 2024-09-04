import React from "react";
import {
  ContainerP,
  PrecioStyled,
  ProductosContainerStyled,
} from "./MenuStyled";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice/cartSlice";
import { toast } from "sonner";

const Productos = ({ nombre, precio, descripcion, img, id }) => {
  const dispatch = useDispatch();
  return (
    <ProductosContainerStyled>
      <img src={img} alt={nombre} />
      <h4>{nombre}</h4>
      <ContainerP>
        <p>{descripcion}</p>
      </ContainerP>
      <PrecioStyled>
        <span>$ {precio}</span>
        <button
          onClick={() => {dispatch(addToCart({ nombre, precio, descripcion, img, id }))
          toast.success("Producto agregado")
        }}
        >
          Agregar
        </button>
      </PrecioStyled>
    </ProductosContainerStyled>
  );
};

export default Productos;

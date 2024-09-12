import React, { useEffect } from "react";
import {
  ContainerButton,
  DescripcionResuenStyled,
  IngredientesStyled,
  PrecioStyled,
  ResumenProductosContainerStyled,
  TitleResumenStyled,
} from "./ResumenProductoStyled";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice/cartSlice";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import { ResumenProductos } from "../../data/ResumenProducto";

const ResumenProducto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const productId = Number(id);
  const producto = ResumenProductos.find(
    (producto) => producto.id === productId
  );

  const { nombre, precio, descripcion, ingredientes, img } = producto;
  return (
    <ResumenProductosContainerStyled>
      <TitleResumenStyled>{nombre}</TitleResumenStyled>
      <img src={img} alt={nombre} />
      <DescripcionResuenStyled>{descripcion}</DescripcionResuenStyled>
      <IngredientesStyled>
        <span>Ingredientes:</span> {ingredientes}
      </IngredientesStyled>
      <PrecioStyled>Precio: $ {precio.toFixed(2)}</PrecioStyled>
      <ContainerButton>
        <button
          onClick={() => {
            dispatch(addToCart({ nombre, precio, descripcion, img, id }));
            toast.success("Producto agregado");
          }}
        >
          AGREGAR AL CARRITO
        </button>
        <button
          onClick={() => {
            navigate("/products");
          }}
        >
          VOLVER
        </button>
      </ContainerButton>
    </ResumenProductosContainerStyled>
  );
};

export default ResumenProducto;

import React from "react";
import {
  Button,
  ButtonContainer,
  Card,
  ContainerCardStyled,
  ContainerInfoStyled,
} from "./CardsRecomendadosStyled";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice/cartSlice";
import { toast } from "sonner";

const CardsRecomendacion = ({ nombre, precio, descripcion, img, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Card>
        <ContainerCardStyled>
          <img src={img} alt={nombre} />
          <ContainerInfoStyled>
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <span>$ {precio}</span>
          </ContainerInfoStyled>
        </ContainerCardStyled>
        <ButtonContainer>
          <Button
            onClick={() => {
              dispatch(addToCart({ nombre, precio, descripcion, img, id }));
              toast.success("Producto agregado");
            }}
          >
            Agregar
          </Button>
          <Link to="/products">
            <Button>Ver Más</Button>
          </Link>
        </ButtonContainer>
      </Card>
    </>
  );
};

export default CardsRecomendacion;

import React from "react";
import { Button, ButtonContainer, Card } from "./CardsRecomendadosStyled";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice/cartSlice";
import { toast } from "sonner";

const CardsRecomendacion = ({ nombre, precio, descripcion, img, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Card>
        <img src={img} alt={nombre} />
        <div>
          <h2>{nombre}</h2>
          <div>
            <p>{descripcion}</p>
            <span>$ {precio}</span>
          </div>
        </div>
        <ButtonContainer>
          <Button
            onClick={() =>
              {dispatch(addToCart({ nombre, precio, descripcion, img, id }))
            toast.success("Producto agregado")
            }
            }
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

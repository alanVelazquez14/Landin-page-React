import React from "react";
import {
  CardsContainer,
  ContainerStyled,
  EnvioStyled,
  PrecioContainerStyled,
  ProductContainerStyled,
  SubtotalStyled,
  TotalStyled,
} from "./ProductCheckoutStyled";
import CardProductCheckout from "../../CardProductCheckout/CardProductCheckout";
import { Link } from "react-router-dom";

const ProductCheckout = ({ cartItems, shippingCost, precio }) => {
  return (
    <ContainerStyled>
      <h1>Tu pedido</h1>
      <ProductContainerStyled>
        <CardsContainer>
          {cartItems.length ? (
            cartItems.map((item) => (
              <CardProductCheckout key={item.id} {...item} />
            ))
          ) : (
            <div>
              <p>CARRITO VACÍO</p>

              <Link to="/products">
                <span>Ver productos</span>
              </Link>
            </div>
          )}
        </CardsContainer>

        <PrecioContainerStyled>
          <SubtotalStyled>
            <p>Subtotal:</p>
            <p>{precio}</p>
          </SubtotalStyled>
          <EnvioStyled>
            <p>Envío:</p>
            <p>{shippingCost}</p>
          </EnvioStyled>
          <span></span>
          <TotalStyled>
            <p>Total:</p>
            <p>
              {(Number(precio || 0) + Number(shippingCost || 0)).toFixed(2)}
            </p>
          </TotalStyled>
        </PrecioContainerStyled>
      </ProductContainerStyled>
    </ContainerStyled>
  );
};

export default ProductCheckout;

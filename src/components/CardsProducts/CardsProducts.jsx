import React from "react";
import {
  CardsContainerStyled,
  TextProductsContainerStyled,
  ProductsContainerStyled,
} from "./CardsProductsStyles";
import { FaStar } from "react-icons/fa";

export const CardsProducts = () => {
  return (
    <TextProductsContainerStyled>
      <h2>
        Nuestros productos destacados <FaStar />
      </h2>
      <ProductsContainerStyled>
        <CardsContainerStyled>
          <img
            src= "img/stacker.png"
            alt="Hamburguesa de carne"
          />
          <h1>Stacker XL</h1>
          <p>
            Tres carnes a la parrilla, salsa stacker, pan, queso cheddar,
            panceta
          </p>
        </CardsContainerStyled>
        <CardsContainerStyled>
          <img
            src="img/pollo_crispy.png"
            alt="Hamburguesa de pollo"
          />
          <h1>Pollo crispy morrón</h1>
          <p>
            Pollo crispy, barbacoa, mostaza dulce, cebolla salteada y morrón
            salteado
          </p>
        </CardsContainerStyled>
        <CardsContainerStyled>
          <img
            src="img/paty_melt.png"
            alt="Patty Melt"
          />
          <h1>Melt de carne doble</h1>
          <p>
            Pan de molde tostado, cebolla rehogada, queso cheddar, salsa Stacker
            y 100% carne a la parrilla
          </p>
        </CardsContainerStyled>
        <CardsContainerStyled>
          <img
            src="img/muzza_sticks.png"
            alt="Muzzarella Sticks"
          />
          <h1>Muzzarella Sticks</h1>
          <p>Bastones de muzzarella rebozados, super crujientes!</p>
        </CardsContainerStyled>
      </ProductsContainerStyled>
    </TextProductsContainerStyled>
  );
};

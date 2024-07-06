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
            src="https://bk-latam-prod.s3.amazonaws.com/sites/burgerking.com.py/files/stacker%20fan%C3%A1tico%20cuadruple.png"
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
            src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/BK_WB_POLLOCRISPYMARRON_1200X800_140922-1024x683.png"
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
            src="https://canalhoreca.cl/wp-content/uploads/2023/06/Foto-Melt-stacker.png"
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
            src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/foto-menu-muzzasticks-1024x683.png"
            alt="Muzzarella Sticks"
          />
          <h1>Muzzarella Sticks</h1>
          <p>Bastones de muzzarella rebozados, super crujientes!</p>
        </CardsContainerStyled>
      </ProductsContainerStyled>
    </TextProductsContainerStyled>
  );
};

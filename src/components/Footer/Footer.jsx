import React from "react";
import {
  FooterBottomContainer,
  FooterContainerStyled,
  FooterInfoContainerStyled,
  FooterTextContainerStyled,
  FooterTitleContainerStyled,
} from "./FooterStyles";

export const Footer = () => {
  return (
    <FooterContainerStyled>
      <FooterTextContainerStyled>
        <FooterTitleContainerStyled>
          <h2>Home Burger Bar</h2>
          <p>En 2006 abrió sus puertas el primer Home Burger Bar.</p>
        </FooterTitleContainerStyled>
        <FooterInfoContainerStyled>
          <a href="#">Nuestra carta</a>
          <a href="#">Restaurantes</a>
          <a href="#">Política de Privacidad</a>
          <a href="#">Cookies</a>
        </FooterInfoContainerStyled>
      </FooterTextContainerStyled>
      <FooterBottomContainer>
        <p>&copy; 2024 HOME BURGER BAR. Todos los derechos reservados.</p>
        <p>Hecho por Alan Velazquez.</p>
      </FooterBottomContainer>
    </FooterContainerStyled>
  );
};

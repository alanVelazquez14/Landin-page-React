import React from "react";
import {
  CategoriasContainer,
  ProductsContainerStyled,
  TitleProductsStyled,
  ProductsContainer
} from "./ProductsStyled";
import Categorias from "../../components/Categorias/Categorias";
import { categorys } from "../../data/Categories";
import Menu from "../../components/Menu/Menu";
import { burger } from "../../data/Menu";

const Products = () => {
  return (
    <>
      <ProductsContainerStyled>
        <TitleProductsStyled>
          <h2>- CONOCÉ NUESTRO -</h2>
          <h1>MENÚ</h1>
        </TitleProductsStyled>
        <CategoriasContainer>
          {categorys.map((category) => (
            <Categorias key={category.id} {...category} />
          ))}
        </CategoriasContainer>

        <ProductsContainer>
          {burger.map((burger) => (
            <Menu key={burger.id} {...burger} />
          ))}
        </ProductsContainer>
      </ProductsContainerStyled>
    </>
  );
};

export default Products;

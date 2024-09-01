import React from "react";
import {
  CategoriasContainer,
  ProductsContainerStyled,
  TitleProductsStyled,
  ProductsContainer,
} from "./ProductsStyled";
import Categorias from "../../components/Categorias/Categorias";
import Menu from "../../components/Menu/Menu";
import { burgers } from "../../data/Menu";
import { useSelector } from "react-redux";

const Products = () => {
  const { categories, selectedCategory } = useSelector(
    (state) => state.categories
  );

  const filteredBurgers = selectedCategory
    ? burgers.filter((burgers) => burgers.categoria === selectedCategory)
    : burgers;

  return (
    <ProductsContainerStyled>
      <TitleProductsStyled>
        <h2>- CONOCÉ NUESTRO -</h2>
        <h1>MENÚ</h1>
      </TitleProductsStyled>

      <CategoriasContainer>
        {categories.map((category) => (
          <Categorias key={category.id} {...category} />
        ))}
      </CategoriasContainer>
      {filteredBurgers.length > 0 && (
        <ProductsContainer>
          {filteredBurgers.map((burger) => (
            <Menu key={burger.id} {...burger} />
          ))}
        </ProductsContainer>
      )}
    </ProductsContainerStyled>
  );
};

export default Products;

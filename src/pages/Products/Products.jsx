import React, { useEffect, useState } from "react";
import {
  CategoriasContainer,
  ProductsContainerStyled,
  TitleProductsStyled,
  ProductsContainer,
  ContainerButtonStyled,
} from "./ProductsStyled";
import Categorias from "../../components/Categorias/Categorias";
import Menu from "../../components/Menu/Menu";
import { burgers, TotalProductos } from "../../data/Menu";
import { useSelector } from "react-redux";
import { Button } from "../../components/UI/Button/ButtonStyles";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const INITIAL_LIMIT = 6;
  const [limit, setLimit] = useState(INITIAL_LIMIT);
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
          {filteredBurgers.map((burger) => {
            if (limit >= burger.id || selectedCategory) {
              return <Menu key={burger.id} {...burger} />;
            }
            return null;
          })}
        </ProductsContainer>
      )}

      {!selectedCategory && (
        <ContainerButtonStyled>
          <Button
            radius={12}
            onClick={() => setLimit((prevLimit) => prevLimit - INITIAL_LIMIT)}
            disabled={INITIAL_LIMIT === limit}
          >
            Ver menos
          </Button>
          <Button
            radius={12}
            onClick={() => setLimit((prevLimit) => prevLimit + INITIAL_LIMIT)}
            disabled={TotalProductos <= limit}
          >
            Ver más
          </Button>
        </ContainerButtonStyled>
      )}
    </ProductsContainerStyled>
  );
};

export default Products;

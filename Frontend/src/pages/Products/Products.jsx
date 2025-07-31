import { useEffect, useState } from "react";
import {
  CategoriasContainer,
  ProductsContainerStyled,
  TitleProductsStyled,
  ProductsContainer,
  ContainerButtonStyled,
} from "./ProductsStyled";
import Categorias from "../../components/Categorias/Categorias";
import Menu from "../../components/Menu/Menu";
import { fetchProducts } from "../../axios/axios-products";
import { useSelector } from "react-redux";
import { Button } from "../../components/UI/Button/ButtonStyles";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(6);
  const { categories, selectedCategory } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      const normalized = data.map((p) => ({
        ...p,
        id: p._id || p.id,
      }));
      setProducts(normalized);
    };
    getProducts();
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.categoria === selectedCategory)
    : products;

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

      {filteredProducts.length > 0 && (
        <ProductsContainer>
          {filteredProducts.map((product, index) => {
            if (limit >= index + 1 || selectedCategory) {
              return <Menu key={product._id || product.id} {...product} />;
            }
            return null;
          })}
        </ProductsContainer>
      )}

      {!selectedCategory && (
        <ContainerButtonStyled>
          <Button
            radius={12}
            onClick={() => setLimit((prevLimit) => Math.max(prevLimit - 6, 6))}
            disabled={limit === 6}
          >
            Ver menos
          </Button>
          <Button
            radius={12}
            onClick={() => setLimit((prevLimit) => prevLimit + 6)}
            disabled={limit >= products.length}
          >
            Ver más
          </Button>
        </ContainerButtonStyled>
      )}
    </ProductsContainerStyled>
  );
};

export default Products;

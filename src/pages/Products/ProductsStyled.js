import styled from "styled-components";

export const ProductsContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Oswald";
`;

export const TitleProductsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 40px;
    color: #f05d5d;
    margin-top: -20px;
  }
`;

export const CategoriasContainer = styled.div`
  display: flex;
  gap: 25px;
`;

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  gap: 12px;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export const ContainerButtonStyled = styled.div`
  display: flex;
  margin-top: 25px;
  gap: 15px;

  button {
    font-size: 15px;
    width: 120px;
    height: 50px;
  }
`;

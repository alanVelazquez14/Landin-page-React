import styled from "styled-components";

export const TextProductsContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  gap: 30px;

  h2 {
    margin: 8rem;
  }

`;

export const ProductsContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;

  @media (max-width: 1300px) {
    width: 100%;
  }
`;

export const CardsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #363b40;
  border-radius: 10px;
  padding: 0 15px;
  max-width: 300px;
  width: calc(50% - 30px);
  box-sizing: border-box;

  img {
    height: 200px;
  }

  P{
    text-align: center;
  }

  @media (max-width: 600px){
    width: 100%;
  }
`;

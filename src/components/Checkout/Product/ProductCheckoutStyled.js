import styled from "styled-components";

export const ProductContainerStyled = styled.div`
  font-family: "Oswald";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 500px;
  min-width: 500px;
  max-height: 300px;
  min-height: 300px;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 20px;
  text-align: center;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  p {
    font-size: 25px;
  }

  span {
    color: #f05d5d;
  }

  @media (max-width: 570px) {
    width: 350px;
    min-width: 400px;
  }

  @media (max-width: 440px) {
    width: 300px;
    min-width: 350px;
  }
`;

export const PrecioContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  width: 500px;
  span {
    border: 1px solid white;
  }

  @media (max-width: 1450px) {
   p{
    font-size: 15px;
   }
  }

  @media (max-width: 570px) {
    width: 350px;
    p{
      font-size: 10px;
    }
  }
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EnvioStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

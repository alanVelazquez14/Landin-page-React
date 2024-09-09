import styled from "styled-components";

export const CardContainerStyled = styled.div`
  display: flex;
  background: #18191a;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  padding: 15px;
  border-radius: 15px;
  margin-bottom: 15px;
  img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
  }
`;

export const CardInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 400px;
  padding: 5px;
`;
export const ProductTitleStyled = styled.div`
  font-size: 15px;
`;

export const TextStyled = styled.div`
  font-size: 10px;
`;

export const PriceStyled = styled.div`
  font-size: 15px;
  color: #f05d5d;
`;

export const QuantityContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

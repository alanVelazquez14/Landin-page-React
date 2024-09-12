import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerStyled = styled(motion.div)`
  font-family: "Oswald";
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  width: 450px;
  height: calc(100vh - 4rem);
  padding: 30px;
  background-color: #18191a;
  border-radius: 0 0 0 8px;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);


  @media (max-width: 400px) {
    width: 350px;
    height: 97vh;
  }
`;

export const CloseButtonContainerStyled = styled.div`
  height: 32px;
`;

export const CloseButtonStyled = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  outline: none;
  border: none;
  border-radius: 10px;
  background: black;
  color: white;
  cursor: pointer;
`;

export const MainContainerStyled = styled.div`
  height: 100%;

  @media (max-width: 400px) {
    width: 90%;
  }
`;

export const TitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 400px) {
    h1{
      font-size: 15px;
    }
  }
`;

export const ProductsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 400px;
  margin: 0 auto;
  padding: 1rem;
  padding-left: 0;
  overflow: scroll;
  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  @media (max-height: 800px) {
    height: 235px;
  }

  @media (max-width: 400px) {
    p{
      font-size: 12px;
    }
  }
`;

export const ProductContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 360px;
  background: #18191a;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 15px;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
  }

  @media (max-width: 390px) {
    width: 250px;
    height: 200px;
    flex-direction: column;
    img{
      width: 150px;
      height: 80px;
    }

  }
`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 190px;

  @media (max-width: 390px) {
    width: 100%;
    text-align: center;
  }

`;

export const CardTitleStyled = styled.div`
  margin-bottom: 2px;

  @media (max-width: 390px) {
    width: 100%;
    font-size: 10px;
  }
`;

export const DescStyled = styled.div`
  font-size: 10px;

  @media (max-width: 390px) {
    width: 100%;
    font-size: 8px;
  }

`;

export const PriceStyled = styled.div`
  font-size: 14px;
`;

export const QuantityContainerStyled = styled.div`
  display: flex;
  align-items: center;


`;

export const InfoPrecioContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  font-size: 20px;

  span {
    border: 1px solid white;
  }
  @media (max-width: 400px) {
    width: 90%;
  }
`;

export const SubtotalContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 400px) {
    font-size: 15px;
  }
`;


export const EnvioContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 400px) {
    font-size: 15px;
  }
`;


export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    color: violet;
  }

  @media (max-width: 400px) {
    font-size: 15px;
  }
`;

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  outline: none;
  border: none;
  border-radius: 15px;
  background-color: #f05d5d;
  color: white;
  text-transform: uppercase;
  font-family: "Oswald";
  margin-top: 15px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    opacity: 45%;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media (max-width: 400px) {
    font-size: 15px;
    width: 90%;
  }
`;

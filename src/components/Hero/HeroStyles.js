import styled from "styled-components";

export const HeroContainerStyled = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1300px;
  gap: 30px;
  margin-bottom: 50px;

  h1 {
    margin-bottom: 2rem;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const HeroTextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;

  h1 {
    font-size: 3rem;
    margin: 10px 0;
  }

  span {
    text-decoration: underline;
  }

  p {
    font-size: 1.2rem;
  }

  @media (max-width: 1000px) {
    width: 80%;
    align-items: center;
    text-align: center;
  }
`;

export const HeroImgContainerStyled = styled.div`
  width: 40%;
  img {
    width: 100%;
    padding-bottom: 75px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const RecomendadosSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 40px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  overflow-x: scroll;
  width: 1500px;
  scroll-snap-type: x mandatory;
  scroll-padding: 0 15px;
  padding: 10px;
  gap: 10px;
  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #252525;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #242424;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

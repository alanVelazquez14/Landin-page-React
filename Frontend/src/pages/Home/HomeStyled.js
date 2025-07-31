import styled from "styled-components";

export const HomeContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  font-family: "Oswald";

  @media (max-width: 400px) {
    width: 100%;
    justify-content: center;
    align-items: center;
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

  @media (max-width: 1550px) {
    padding: 50px;

    h1 {
      font-size: 35px;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 30px;
    }
    margin-top: -105px;
  }
  @media (max-width: 400px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    h1{
      font-size: 19px;
    }
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

  @media (max-width: 1550px) {
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    padding: 20px;
    gap: 20px;
    box-sizing: border-box;
  }
  @media (max-width: 400px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

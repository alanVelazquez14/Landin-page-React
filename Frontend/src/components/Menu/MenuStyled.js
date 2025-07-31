import styled from "styled-components";

export const ProductosContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: #242424;
  border-radius: 12px;
  margin-top: 25px;
  width: 350px;
  height: 450px;

  h4 {
    font-size: 20px;
  }

  img {
    height: 260px;
    width: 340px;
    border-radius: 8px;
    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 875px) {
    width: 300px;
    height: 400px;

    img {
      width: 290px;
      height: 240px;
    }

    h4 {
      font-size: 15px;
    }
    p {
      font-size: 12px;
    }
  }

  @media (max-width: 725px) {
    width: 270px;
    height: 300px;

    img {
      width: 250px;
      height: 170px;
    }

    h4 {
      font-size: 11px;
    }
    p {
      font-size: 10px;
    }
  }

  @media (max-width: 620px) {
    width: 250px;
    height: 280px;

    img {
      width: 200px;
      height: 150px;
    }

    h4 {
      font-size: 10px;
    }
    p {
      padding: 10px;
      font-size: 8px;
    }
  }

  @media (max-width: 520px) {
    width: 220px;
    height: 250px;

    img {
      width: 200px;
      height: 150px;
    }

    h4 {
      font-size: 8px;
    }
    p {
      padding: 8px;
      font-size: 8px;
    }
  }

  @media (max-width: 390px) {
    width: 170px;
    height: 210px;

    img {
      width: 160px;
      height: 150px;
    }

    h4 {
      font-size: 6px;
    }
    p {
      padding: 2px;
      font-size: 6px;
    }
  }
`;

export const ContainerP = styled.div`
  margin-top: -15px;
`;

export const PrecioStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin-top: auto;

  span {
    color: #f05d5d;
    font-size: 20px;
  }

  button {
    padding: 8px 13px;
    outline: none;
    border: none;
    border-radius: 15px;
    background-color: violet;
    color: white;
    font-size: 15px;
    font-family: "Oswald";
    cursor: pointer;
    &:hover {
      opacity: 70%;
    }
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  @media (max-width: 875px) {
    button {
      font-size: 12px;
    }

    span {
      font-size: 15px;
    }
  }
  @media (max-width: 620px) {
    button {
      font-size: 10px;
    }

    span {
      font-size: 10px;
    }
  }
  @media (max-width: 520px) {
    button {
      padding: 5px 8px;
      font-size: 10px;
    }

    span {
      font-size: 10px;
    }
  }

  @media (max-width: 390px) {
    button {
      padding: 2px 4px;
      font-size: 8px;
    }

    span {
      font-size: 8px;
    }
  }
`;

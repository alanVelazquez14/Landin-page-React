import styled from "styled-components";

export const FelicitacionesContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Oswald";

  h1 {
    font-size: 30px;
    color: #f05d5d;
  }

  img {
    width: 250px;
  }

  p {
    font-size: 20px;
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 20px;
    }

    img {
      width: 150px;
    }

    p {
      font-size: 15px;
    }
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
    font-size: 10px;
  }
`;

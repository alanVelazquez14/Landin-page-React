import styled from "styled-components";

export const AboutUsContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 1300px;
  font-family: "Oswald";
  gap: 40px;

  h1 {
    font-size: 3rem;
  }
  img {
    border-radius: 10px;
  }
  p {
    font-size: 1.1rem;
  }
  span {
    color: #f05d5d;
  }
  a {
    &:hover {
      color: #f05d5d;
    }
  }

  @media (max-width: 1325px) {
    max-width: 1000px;
  }

  @media (max-width: 1130px) {
    max-width: 900px;
  }

  @media (max-width: 925px) {
    max-width: 700px;
  }

  @media (max-width: 825px) {
    h1 {
      font-size: 20px;
    }
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 15px;
    }
    img {
      width: 300px;
    }
  }

  @media (max-width: 725px) {
    max-width: 500px;
    h1 {
      font-size: 15px;
    }
    h2 {
      font-size: 15px;
    }
    p {
      font-size: 10px;
    }
    img {
      width: 325px;
    }
  }

  @media (max-width: 535px) {
    max-width: 300px;
    img {
      width: 250px;
    }
  }

  @media (max-width: 400px) {
    max-width: 200px;
    justify-content: center;
    h1 {
      font-size: 10px;
    }
    h2 {
      font-size: 10px;
    }
    p {
      padding: 15px;
      font-size: 8px;
    }
    img {
      width: 300px;
    }
  }
`;

export const AboutUsInfoStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  justify-content: space-between;
  /* p {
    width: 100%;
  } */

  @media (max-width: 535px) {
    div {
      flex-direction: column;
    }
  }

  @media (max-width: 450px) {
    padding: 30px;
  }

  @media (max-width: 400px) {
    margin-top: -25px;
    p {
      align-items: center;
    }
  }

  @media (max-width: 370px) {
    padding: 50px;
    margin-top: -25px;
    p {
      justify-content: center;
      align-items: center;
    }
  }
`;

export const VerticalDivider = styled.div`
  border-left: 1px solid white;
  height: 200px;
  margin: 0 50px;

  @media (max-width: 535px) {
    border: 1px solid white;
    height: 0;
    width: 300px;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  img {
    width: 450px;
    height: 350px;
    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 1325px) {
    img {
      width: 350px;
      height: 250px;
    }
  }

  @media (max-width: 1125px) {
    img {
      width: 250px;
      height: 150px;
    }
  }
  @media (max-width: 825px) {
    img {
      width: 150px;
      height: 100px;
    }
  }

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

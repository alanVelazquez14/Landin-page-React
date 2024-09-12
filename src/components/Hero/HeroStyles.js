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

  @media (max-width: 1250px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

  @media (max-width: 1250px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 25px;
    min-width: 900px;
  }

  @media (max-width: 1000px) {
    min-width: 700px;
    align-items: center;
    text-align: center;
    margin-top: 50px;
  }

  @media (max-width: 750px) {
    min-width: 500px;
    align-items: center;
    text-align: center;
    margin-top: 50px;

    h1 {
      font-size: 35px;
    }
    p {
      font-size: 18px;
    }
  }

  @media (max-width: 610px) {
    h1 {
      font-size: 25px;
    }
    p {
      font-size: 15px;
    }

    @media (max-width: 610px) {
      h1 {
        font-size: 20px;
      }
      p {
        max-width: 300px;
      }
      button {
        font-size: 10px;
        margin-top: 50px;
      }
    }
    @media (max-width: 450px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      h1 {
        font-size: 18px;
      }
      p {
        max-width: 300px;
      }
      button {
        font-size: 10px;
        margin-top: 50px;
      }
  }
  }
`;

export const HeroImgContainerStyled = styled.div`
  width: 40%;
  img {
    width: 100%;
    padding-bottom: 75px;
  }

  @media (max-width: 1000px) {
    width: 300px;
  }
  @media (max-width: 750px) {
    margin-bottom: -80px;
  }
  @media (max-width: 610px) {
    width: 200px;
    margin-top: -30px;
  }

  @media (max-width: 450px) {
    width: 150px;
    margin-top: -30px;
  }
`;
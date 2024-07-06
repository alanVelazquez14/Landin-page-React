import styled from "styled-components";

export const FooterContainerStyled = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #1f2021;
  margin-top: 200px;

`;

export const FooterTextContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px;
  margin-bottom: 15px;

  @media (max-width: 1000px) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }
`;

export const FooterTitleContainerStyled = styled.div`
  display: flex;
  flex-direction: column;

  h2{
    font-size: 2rem;
  }
`;

export const FooterInfoContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FooterBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

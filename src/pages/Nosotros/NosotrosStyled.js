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
`;

export const AboutUsInfoStyled = styled.div`
  display: flex;
  gap: 35px;
  justify-content: space-between;
`;
export const VerticalDivider = styled.div`
  border-left: 1px solid white;
  height: 200px;
  margin: 0 50px;
`;

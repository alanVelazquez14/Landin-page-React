import styled from "styled-components";

export const CategoryContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: ${(props) => (props.selected ? "#f05d5d" : "#1f2021")};
  border-radius: 12px;
  padding: 8px;
  cursor: pointer;
  width: 200px;
  height: 115px;
  transition: transform 0.3s ease, background-color 0.3s ease;

  span {
    color: #f05d5d;
  }

  h4 {
    margin-top: 0;
    color: ${(props) => (props.selected ? "#ffffff" : "#f05d5d")};
  }

  img {
    width: 50px;
  }

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1130px) {
    width: 150px;
    height: 100px;
    h4 {
      font-size: 10px;
    }
    img {
      width: 40px;
    }
  }

  @media (max-width: 875px) {
    width: 120px;
    height: 80px;
    img {
      width: 30px;
    }
  }

  @media (max-width: 725px) {
    width: 100px;
    height: 70px;

    h4 {
      font-size: 9px;
    }

    img {
      width: 25px;
    }
  }

  @media (max-width: 620px) {
    h4 {
      font-size: 8px;
    }

    img {
      width: 25px;
    }
  }

  @media (max-width: 620px) {
    
  }
`;

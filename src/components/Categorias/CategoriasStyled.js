import styled from "styled-components";

export const CategoryContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: #1f2021;
  border-radius: 12px;
  padding: 8px;
  cursor: pointer;
  width: 200px;
  height: 115px;

  span {
    color: #f05d5d;
  }

  h4 {
    margin-top: 0;
  }

  img {
    width: 50px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

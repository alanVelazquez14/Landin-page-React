import { motion } from "framer-motion";
import styled from "styled-components";

export const IncreaseStyled = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: ${({ bgColor }) => bgColor || "violet"};
  border: none;
  border-radius: 15px;
  font-size: 15px;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 570px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 390px) {
    display: flex;
    flex-direction: column;
    font-size: 12px;
  }
`;

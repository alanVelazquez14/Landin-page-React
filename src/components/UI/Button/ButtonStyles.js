import styled from "styled-components";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: ${({ radius }) => `${radius}px`};
  background-color: violet;
  color: white;
  text-transform: uppercase;
  font-family: "Oswald";
  cursor: pointer;
  &:hover {
    opacity: 95%;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

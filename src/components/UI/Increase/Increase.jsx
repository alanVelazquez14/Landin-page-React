import { IncreaseStyled } from "./IncreaseStyled";

const Increase = ({
  children,
  bgColor,
  disabled = false,
  onClick = (e) => e.preventDefault(),
}) => {
  return (
    <IncreaseStyled
      bgColor={bgColor}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </IncreaseStyled>
  );
};

export default Increase;

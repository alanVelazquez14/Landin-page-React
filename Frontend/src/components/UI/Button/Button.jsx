import * as s from "./ButtonStyles";

export const Button = ({ children, radius = "30", disabled = false }) => {
  return (
    <s.Button whileTap={{ scale: 0.95 }} radius={radius} disabled={disabled}>
      {children}
    </s.Button>
  );
};

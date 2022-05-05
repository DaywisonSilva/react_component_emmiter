import { StyledButton } from "./Button.styles";

interface ButtonProps {
  onClick: () => void;
  label: string;
}
function Button({ onClick, label }: ButtonProps) {
  return (
    <button className={StyledButton()} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;

import { ButtonContainer } from "./style";
import { ButtonUp } from "./style";
const Button = ({ label, onClick }) => {
  return <ButtonContainer onClick={onClick}>{label}</ButtonContainer>;
};

const ButtonUpOne = ({ label, onClick }) => {
  return <ButtonUp onClick={onClick}>{label}</ButtonUp>;
};

export default { Button, ButtonUpOne };

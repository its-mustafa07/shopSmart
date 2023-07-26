import { InputWrapper } from "./input.styles";

const Input = ({ type, placeholder, value, onChange, children }) => {
  return (
    <InputWrapper
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      requireds
    >
      {children}
    </InputWrapper>
  );
};

export default Input;

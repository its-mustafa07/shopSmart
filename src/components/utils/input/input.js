import { InputWrapper } from "./input.styles";

const Input = ({
  width,
  height,
  type,
  placeholder,
  value,
  onChange,
  children,
}) => {
  return (
    <InputWrapper
      width={width}
      height={height}
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

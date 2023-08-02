import { InputWrapper } from "./input.styles";

const Input = ({
  width,
  height,
  type,
  placeholder,
  value,
  onChange,
  name,
  children,
}) => {
  return (
    <InputWrapper
      width={width}
      height={height}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required
    >
      {children}
    </InputWrapper>
  );
};

export default Input;

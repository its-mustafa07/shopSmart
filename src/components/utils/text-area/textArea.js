import React from "react";
import { TextAreaWrapper } from "./textArea.styles";

const TextArea = ({ placeholder, value, onChange, name }) => {
  return (
    <TextAreaWrapper
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    ></TextAreaWrapper>
  );
};

export default TextArea;

import React from "react";
import { TextAreaWrapper } from "./textArea.styles";

const TextArea = ({ placeholder, value, onChange }) => {
  return (
    <TextAreaWrapper
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></TextAreaWrapper>
  );
};

export default TextArea;

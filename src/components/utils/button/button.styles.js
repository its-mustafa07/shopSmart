import { styled } from "styled-components";

export const ButtonWrapper = styled.button`
  background-color: ${(props) => props.bg};
  border: none;
  outline: none;
  white-space: nowrap;
  color: ${(props) => props.color};
  cursor: pointer;
  outline: none;

  font-size: ${(props) => props.theme.typography.fontSize.sm};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-weight: ${(props) => props.theme.typography.fontWeight.Regular};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius || "0.4rem"};
  width: ${(props) => props.width};
`;

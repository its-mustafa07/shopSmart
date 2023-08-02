import { styled } from "styled-components";

export const ButtonWrapper = styled.button`
  background-color: ${(props) => props.bg};
  border: none;
  outline: none;
  white-space: nowrap;
  color: ${(props) => props.color};
  cursor: pointer;
  outline: none;
  font-size: ${(props) => props.fontSize || props.theme.typography.fontSize.md};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-weight: ${(props) =>
    props.fontWeight || props.theme.typography.fontWeight.Regular};
  height: ${(props) => props.height};
  text-shadow: 0.1rem 0.1rem 0.5rem hsla(0, 0%, 0%, 0.5);
  letter-spacing: 0.1rem;
  border-radius: ${(props) => props.borderRadius || "0.4rem"};
  user-select: none;
  width: ${(props) => props.width};
  transition: all 0.1s ease-in;
`;

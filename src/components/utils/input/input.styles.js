import { styled } from "styled-components";

export const InputWrapper = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.theme.spacing.xs};
  font-size: ${(props) => props.theme.typography.fontSize.md};
  background-color: #e4e4e6;
  color: ${(props) => props.theme.color.gray};
  border-radius: 8px;
  border: none;
  outline: none;
`;

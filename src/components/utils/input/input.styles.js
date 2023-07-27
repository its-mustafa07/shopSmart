import { styled } from "styled-components";

export const InputWrapper = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.theme.spacing.lg};
  font-size: ${(props) => props.theme.typography.sizes.md};
  background-color: #e4e4e6;
  color: ${(props) => props.theme.color.gray};
  border-radius: 8px;
  border: none;
  outline: none;

  @media screen and (max-width: 400px) {
    width: 25rem;
    height: 5rem;
  }
  @media screen and (max-width: 386px) {
    width: 22rem;
    height: 4rem;
    border-radius: 6px;
    padding: ${(props) => props.theme.spacing.lg};
    font-size: ${(props) => props.theme.typography.sizes.sm};
  }
`;

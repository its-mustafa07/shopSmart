import { styled } from "styled-components";

export const TextAreaWrapper = styled.textarea`
  width: 32rem;
  height: 20rem;
  border-radius: ${(props) => props.theme.spacing.sm};
  background: ${(props) => props.theme.color.secondary};
  padding: ${(props) => props.theme.spacing.xl};
  outline: none;
  border: none;
  &:focus {
    outline: 1px solid ${(props) => props.theme.color.primary};
  }
`;

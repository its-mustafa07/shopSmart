import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 20.5rem;
  /* height: 3.7rem; */
  height: calc(${(props) => props.theme.spacing.lg} + 0.5rem);
  background-color: ${(props) => props.theme.color.secondary};
  display: flex;
  align-items: center;
  border-radius: ${(props) => props.theme.spacing.sm};
  gap: ${(props) => props.theme.spacing.lg};
  @media (max-width: 340px) {
    width: 19rem;
  }
  @media (max-width: 310px) {
    width: 16rem;
  }
`;
export const SearchInputStyled = styled.input`
  color: ${(props) => props.theme.color.gray};
  width: 100%;
  height: 100%;
  /* background-color: red; */
  background-color: ${(props) => props.theme.color.secondary};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: 1.2rem;
  font-style: normal;
  font-weight: ${(props) => props.theme.typography.fontWeight.regular};
  border-radius: ${(props) => props.theme.spacing.sm};
  line-height: normal;
  border: none;
  outline: none;
  @media (max-width: 340px) {
    width: 11rem;
  }
  @media (max-width: 310px) {
    width: 9rem;
  }
`;

export const SearchIconStyled = styled.img`
  padding-left: ${(props) => props.theme.spacing.lg};
`;

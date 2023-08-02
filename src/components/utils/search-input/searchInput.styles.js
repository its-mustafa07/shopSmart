import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: calc(${({ theme }) => theme.spacing.xxl} + 14.1rem);
  height: calc(${({ theme }) => theme.spacing.lg} + 0.5rem);
  background-color: ${({ theme }) => theme.color.secondary};
  display: flex;
  align-items: center;
  border-radius: calc(${({ theme }) => theme.spacing.xxs}+ 0.1rem);
  gap: ${({ theme }) => theme.spacing.lg};
  @media (max-width: 340px) {
    width: calc(${({ theme }) => theme.spacing.xxl}+ 12.6rem);
  }
  @media (max-width: 310px) {
    width: calc(${({ theme }) => theme.spacing.xxl}+ 9.6rem);
  }
`;
export const SearchInputStyled = styled.input`
  color: ${({ theme }) => theme.color.gray};
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSize.xxs};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  border-radius: ${({ theme }) => theme.spacing.sm};
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
  padding-left: ${({ theme }) => theme.spacing.lg};
`;

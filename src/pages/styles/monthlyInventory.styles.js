import { styled } from "styled-components";

export const SearchWrapper = styled.div`
  width: 60%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto calc(${({ theme }) => theme.spacing.lg} + 0.8rem);

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 80%;
    /* flex-direction: column; */
    row-gap: 2rem;
  }
  /* @media (max-width: 340px) {
    width: 26.5rem;
  }
  @media (max-width: 310px) {
    width: 23.5rem;
  } */
`;

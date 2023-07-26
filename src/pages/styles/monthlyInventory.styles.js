import { styled } from "styled-components";

export const SearchWrapper = styled.div`
  max-width: 28.5rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 4rem;

  @media (max-width: 340px) {
    width: 26.5rem;
  }
  @media (max-width: 310px) {
    width: 23.5rem;
  }
`;

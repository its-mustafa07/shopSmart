import { styled } from "styled-components";

export const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  width: auto;
  width: 28.5rem;
  min-height: 7rem;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.color.secondary};
  position: relative;

  @media (max-width: 340px) {
    width: 26.5rem;
  }
  @media (max-width: 310px) {
    width: 23.5rem;
  }
`;

export const GapCotainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;
export const CoverImageWrapper = styled.div`
  height: 6rem;
  width: 6.3rem;
  border: 0.2rem solid ${(props) => props.theme.color.primary};
  border-radius: 0.8rem;
  background-image: ${(props) => `url(${props.cover})`};
  background-size: cover;
  background-position: center;
`;
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  color: ${(props) => props.theme.color.primary};
  height: 5rem;
`;

export const Para = styled.p`
  font-size: ${(props) => props.theme.typography.sizes.sm};
`;

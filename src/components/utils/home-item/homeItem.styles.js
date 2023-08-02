import { styled } from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ItemName = styled.p`
  font-size: calc(${({ theme }) => theme.typography.fontSize.sm} + 0.2rem);
  color: ${({ theme }) => theme.color.primary};
  margin: 1.5rem 0;
  font-weight: calc(${({ theme }) => theme.typography.fontWeight.bold} -100);
`;

export const ImageWrapper = styled.div`
  max-width: 15rem;
  max-height: 15rem;
  border: 0.4rem solid ${({ theme }) => theme.color.primary};
  background-image: ${({ imgUrl }) => `url(${imgUrl})`};
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
`;

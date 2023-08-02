import { styled } from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ItemName = styled.p`
  font-size: ${(props) => props.theme.typography.fontSize.lg};
  color: ${(props) => props.theme.color.primary};
  margin: 1.5rem 0;
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
`;

export const ImageWrapper = styled.div`
  max-width: 15rem;
  max-height: 15rem;
  border: 0.4rem solid ${(props) => props.theme.color.primary};
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
`;

import { styled } from "styled-components";

export const LiftedGridWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 15rem;
  width: 14rem;
  margin-bottom: 1.8rem;
  text-align: center;
`;

export const BackgroundWrapper = styled.div`
  height: 85%;
  width: 100%;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.color.secondary};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.color.primary};
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 80%;
`;

export const ImageContainer = styled.div`
  width: 6.3rem;
  height: 6rem;
  border-radius: 0.8rem;
  background-image: ${(props) => `url(${props.cover})`};
  background-position: center;
  background-size: cover;
`;

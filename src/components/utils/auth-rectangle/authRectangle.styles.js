import { styled } from "styled-components";

export const RectangleWrapper = styled.div`
  width: 100vw;
  height: 27vh;
  border-radius: 0rem 0rem 6rem 6rem;
  background: rgba(6, 145, 154, 0.38);
  display: flex;
  justify-content: space-between;
  padding-left: 6rem;
  padding-right: ${(props) => props.theme.spacing.md};
  align-items: center;
  @media screen and (max-width: 387px) {
    padding-left: 4.5rem;
  }
  @media screen and (max-width: 360px) {
    padding-left: 3.5rem;
    padding-right: ${(props) => props.theme.spacing.sm};
  }
  @media screen and (max-width: 340px) {
    padding-left: 2rem;
  }
`;

export const RectangleContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
  @media screen and (max-width: 330px) {
    gap: 0.5rem;
  }
`;
export const HeadingText = styled.div`
  color: ${(props) => props.theme.color.white};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: 2.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media screen and (max-width: 400px) {
    font-size: 2.4rem;
  }
  @media screen and (max-width: 387px) {
    font-size: 2.2rem;
  }
  @media screen and (max-width: 330px) {
    font-size: 1.8rem;
  }
`;
export const ParaText = styled.p`
  color: ${(props) => props.theme.color.semiWhite};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.sizes.sm};
  font-weight: ${(props) => props.theme.typography.fontWeight.regular};
  @media screen and (max-width: 330px) {
    font-size: ${(props) => props.theme.typography.sizes.sm - 4};
  }
`;
export const SvgImage = styled.div`
  margin-top: 7rem;
  padding-top: ${(props) => props.theme.spacing.md};
  padding-right: 4rem;
  @media screen and (max-width: 387px) {
    margin-top: 5rem;
    padding-top: ${(props) => props.theme.spacing.md};
    padding-right: 3.5rem;
  }
  @media screen and (max-width: 335px) {
    margin-top: 5rem;
    padding-top: ${(props) => props.theme.spacing.md};
    padding-right: 2rem;
    svg {
      width: 12.5rem;
      height: 10.2rem;
    }
  }
`;

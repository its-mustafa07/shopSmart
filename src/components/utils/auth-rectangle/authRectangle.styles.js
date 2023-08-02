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
`;

export const RectangleContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
`;
export const HeadingText = styled.div`
  color: ${(props) => props.theme.color.white};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: 2.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const ParaText = styled.p`
  color: ${(props) => props.theme.color.semiWhite};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.fontSize.sm};
  font-weight: ${(props) => props.theme.typography.fontWeight.regular};
`;
export const SvgImage = styled.div`
  margin-top: 7rem;
  padding-top: ${(props) => props.theme.spacing.md};
  padding-right: 4rem;
`;

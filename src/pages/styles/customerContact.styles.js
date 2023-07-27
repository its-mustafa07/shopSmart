import { styled } from "styled-components";

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 2rem;
  gap: 3rem;
`;
export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;
`;
export const TextPara = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 4rem;
  position: absolute;
  bottom: 10rem;
  p {
    color: ${(props) => props.theme.color.black};
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-size: ${(props) => props.theme.typography.sizes.sm};
    font-style: normal;
    font-weight: ${(props) => props.theme.typography.fontWeight.regular};
    line-height: normal;
  }
`;
export const ParagraphText = styled.div`
  color: ${(props) => props.theme.color.black};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.sizes.md};
  font-style: normal;
  font-weight: ${(props) => props.theme.typography.fontWeight.bold - 100};
  padding-bottom: ${(props) => props.theme.spacing.xl};
  padding-top: ${(props) => props.theme.spacing.xl};
`;

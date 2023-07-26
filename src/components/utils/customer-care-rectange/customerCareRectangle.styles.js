import { styled } from "styled-components";

export const CostomerCareWrapper = styled.div`
  width: 100vw;
  height: 27vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 6rem 6rem;
  background: #06919a;
`;
export const MainCost = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
export const ParagraphText = styled.div`
  color: ${(props) => props.theme.color.white};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.sizes.md};
  font-style: normal;
  font-weight: ${(props) => props.theme.typography.fontWeight.bold - 100};
`;

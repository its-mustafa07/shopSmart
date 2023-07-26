import { styled } from "styled-components";

export const ShopSmartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ShopSmartStyled = styled.h3`
  color: ${(props) => props.theme.color.primary};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.sizes.lg};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

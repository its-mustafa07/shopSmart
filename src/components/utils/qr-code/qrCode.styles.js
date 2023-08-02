import { styled } from "styled-components";
export const Wrapper = styled.div`
  margin-bottom: ${(props) => props.marginBottom || 0};
`;
export const QRcodeStyled = styled.img`
  width: calc(${({ theme }) => theme.spacing.xxl} + 6.3rem);
  height: calc(${({ theme }) => theme.spacing.xxl} + 6.3rem);
`;

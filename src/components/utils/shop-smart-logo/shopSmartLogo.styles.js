import { styled } from "styled-components";
export const ShopSmartWrapper = styled.div`
  border-radius: ${(props) => props.theme.spacing.sm};
  background: ${(props) => props.theme.color.secondary};
  width: 244px;
  height: 82px;
  display: flex;
  justify-content: center;
  margin-top: 4.4rem;
  align-items: center;

  @media (max-width: 340px) {
    width: 20.5rem;
  }
  @media (max-width: 310px) {
    width: 17.5rem;
  }
`;

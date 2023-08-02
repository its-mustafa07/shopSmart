import { styled } from "styled-components";

export const Overley = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  visibility: ${({ showSettings }) => (showSettings ? "visible" : "hidden")};
  background: rgba(1, 1, 1, 0.26);
`;

export const MainWrapper = styled.div`
  width: 29.5rem;
  z-index: 10;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.white};
  position: absolute;
  top: 0;
  left: ${({ showSettings }) => (showSettings ? 0 : "-300px")};
  transition: left 0.3s ease-in-out;
  overflow: auto;

  @media (max-width: 340px) {
    width: 26.5rem;
  }
  @media (max-width: 310px) {
    width: 23.5rem;
  }
`;

export const HeadingWrapper = styled.h3`
  color: ${(props) => props.theme.color.primary};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: 2.2rem;
  font-style: normal;
  font-weight: ${(props) => props.theme.typography.fontWeight.regular};
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4.3rem;
  margin-bottom: 1.7rem;
`;
export const ShopSmartWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3.6rem;
`;
export const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3.6rem;
`;

export const SettingsItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SettingsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Heading = styled.h3`
  color: #000;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 2.9rem;
`;
export const LinkWrap = styled.link`
  background-color: red;
`;
export const Paragraph = styled.p`
  color: #000;
  margin-left: 2.9rem;
  font-size: 1.8rem;
  display: flex;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

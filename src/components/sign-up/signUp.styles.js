import { styled } from "styled-components";
import background from "../../Assets/images/home-bg.jpg";
export const SignupWrapper = styled.div`
  background-image: url(${background});
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
  overflow: hidden;
  overflow-y: hidden;
  width: 50%;
  overflow: hidden;
`;
export const Text = styled.h6`
  color: ${(props) => props.theme.color.black};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.sizes.md};
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
  span {
    color: ${(props) => props.theme.color.semiWhite};
  }
`;
export const SignupIcons = styled.div``;
export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  padding-top: 5rem;
  @media screen and (max-width: 360px) {
    padding-top: 2.5rem;
    gap: 2rem;
  }
  @media screen and (max-width: 360px) {
    gap: 1.5rem;
  }
`;

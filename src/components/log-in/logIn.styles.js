import { styled } from "styled-components";
import background from "../../Assets/images/home-bg.jpg";

export const LoginWrapper = styled.div`
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
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 10rem 0;
  Button {
    margin-top: 3rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    padding: 7rem 0;
    gap: 2rem;
  }
`;
export const FormText = styled.p`
  color: ${(props) => props.theme.color.black};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.fontSize.xs};
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};

  span {
    color: ${(props) => props.theme.color.semiWhite};
    text-decoration: none;
  }
`;

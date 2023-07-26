import { styled } from "styled-components";

export const Wrapper = styled.div`
  padding-top: 7rem;
  padding-left: 3rem;
  padding-right: 1rem;
  min-height: 27vh;
  width: 100vw;
  background-color: ${(props) => props.theme.color.primary};
  border-bottom-left-radius: 6rem;
  border-bottom-right-radius: 6rem;
  margin-bottom: ${(props) => props.marginBottom || 0};
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.semiWhite};
`;

export const Greetings = styled.p`
  display: ${(props) => (props.greetings ? "block" : "none")};
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Avatar = styled.img`
  height: 5rem;
  width: 5rem;
  border-radius: 50px;
`;

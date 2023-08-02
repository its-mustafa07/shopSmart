import { styled } from "styled-components";

export const ListViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  height: ${({ height }) => height || "auto"};
  overflow: auto;
`;

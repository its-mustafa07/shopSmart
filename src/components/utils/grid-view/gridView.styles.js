import { styled } from "styled-components";

export const GridContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 3.5rem;
  height: ${(props) => props.height || "auto"};
  margin-bottom: ${(props) => props.marginBottom || 0};
  overflow: auto;

  @media (max-width: 370px) {
    justify-content: center;
  }
`;

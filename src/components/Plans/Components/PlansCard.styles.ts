import styled from "styled-components";

type PlansCardProps = {
  recommended?: boolean;
};

export const Card = styled.div<PlansCardProps>`
  padding: 1rem;
  width: 390px;
  height: auto;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background-color: ${(props) => (props.recommended ? "#000019" : "#fff")};
  color: ${(props) => (props.recommended ? "#fff" : "#000019")};

  @media (max-width: 1024px) {
    width: 95%;
  }
`;

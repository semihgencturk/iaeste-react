import React from "react";
import styled from "styled-components";

const ExternalButtonContainer = styled.button`
  font-size: 18px;
  border: none;
  border-radius: 25px;
  background: #e14d2a;
  color: white;
  padding: 2vh;
  white-space: nowrap;
  box-shadow: rgba(225, 77, 42, 0.4) -5px 5px, rgba(225, 77, 42, 0.3) -10px 10px,
    rgba(225, 77, 42, 0.2) -15px 15px, rgba(225, 77, 42, 0.1) -20px 20px,
    rgba(225, 77, 42, 0.05) -25px 25px;
  :hover {
    color: black;
    cursor: pointer;
    box-shadow: none;
  }
`;

const ExternalButton = ({ href, buttonTitle }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <ExternalButtonContainer>{buttonTitle}</ExternalButtonContainer>
    </a>
  );
};

export default ExternalButton;

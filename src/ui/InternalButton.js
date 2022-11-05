import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const InternalButtonContainer = styled.button`
  font-size: 18px;
  border: none;
  border-radius: 25px;
  background: rgb(11, 61, 89);
  color: white;
  padding: 2vh;
  white-space: nowrap;
  transform: rotate(-5deg);

  :hover {
    color: black;
    cursor: pointer;
  }
`;

const InternalButton = ({ linkTo, buttonTitle }) => {
  return (
    <Link to={linkTo}>
      <InternalButtonContainer>{buttonTitle}</InternalButtonContainer>
    </Link>
  );
};

export default InternalButton;

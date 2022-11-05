import React from "react";
import styled from "styled-components";

const ScrollButtonContainer = styled.button`
  background: rgb(11, 61, 89);
  padding: 2vh;
  border: none;
  border-radius: 25px;
  color: white;

  span {
    margin-left: 2vh;
  }

  :hover {
    cursor: pointer;
  }
`;

const ScrollButton = ({ text }) => {
  return (
    <ScrollButtonContainer>
      {/* <span className="fa-solid fa-circle-arrow-down"></span> */}
      {text}
      <span className="fa-solid fa-circle-arrow-down"></span>
    </ScrollButtonContainer>
  );
};

export default ScrollButton;

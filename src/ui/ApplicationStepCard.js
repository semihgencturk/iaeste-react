import React from "react";
import styled from "styled-components";

const ApplicationStepCardContainerBox = styled.div`
  width: 100%;
  height: auto;
  background: ${(props) => props.boxColor && props.boxColor};
  display: flex;
  gap: 3vh;
  border-radius: 25px;
  padding: 2vh;
  cursor: pointer;
  float: ${(props) => props.textAlign && props.textAlign};
`;

const ApplicationStepCardBox = styled.div`
  font-size: 18px;
  color: black;
  white-space: nowrap;

  span {
    margin-right: 2vh;
    color: black;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ApplicationStepCardAnswer = styled.div`
  font-size: 16px;

  ul {
    margin: 0;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ApplicationStepCard = ({ title, explanation, boxColor, textAlign }) => {
  return (
    <ApplicationStepCardContainerBox boxColor={boxColor} textAlign={textAlign}>
      <ApplicationStepCardBox>
        <span className="fa-solid fa-flag-checkered"></span>
        {title}
      </ApplicationStepCardBox>
      <ApplicationStepCardAnswer>
        <ul>
          {explanation.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </ApplicationStepCardAnswer>
    </ApplicationStepCardContainerBox>
  );
};

export default ApplicationStepCard;

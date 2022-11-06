import React from "react";
import styled from "styled-components";

const BeIaesteInternCardContainer = styled.div`
  width: 30%;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #1a1c20;
  border-radius: 25px;
  padding: 15px;
  margin: 10px 0 0 0;
  border: solid grey 1px;

  @media (max-width: 768px) {
    width: 100%;
    min-height: 10vh;
    height: auto;
    padding: 2vh 0 0 0;
  }
`;

const BeIaesteInternCardLogo = styled.span`
  font-size: 40px;
  color: #f9813a;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const BeIaesteInternCardText = styled.p`
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const BeIaesteInternCard = ({ logo, text }) => {
  console.log(text);
  return (
    <BeIaesteInternCardContainer>
      <BeIaesteInternCardLogo className={logo}></BeIaesteInternCardLogo>
      <BeIaesteInternCardText>
        <ul>
          {text.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </BeIaesteInternCardText>
    </BeIaesteInternCardContainer>
  );
};

export default BeIaesteInternCard;

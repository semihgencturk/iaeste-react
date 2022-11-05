import React from "react";
import styled from "styled-components";

const ForCompaniesAdvantagesCardContainer = styled.div`
  width: 20%;
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #1a1c20;
  border-radius: 25px;
  padding: 15px;
  margin: 10px 0 0 0;
  border: solid grey 1px;
`;

const ForCompaniesAdvantagesCardLogo = styled.span`
  font-size: 40px;
  color: #f9813a;
`;

const ForCompaniesAdvantagesCardText = styled.p`
  font-size: 16px;
  text-align: center;
`;

const ForCompaniesAdvantagesCard = ({ logo, text }) => {
  return (
    <ForCompaniesAdvantagesCardContainer>
      <ForCompaniesAdvantagesCardLogo
        className={logo}
      ></ForCompaniesAdvantagesCardLogo>
      <ForCompaniesAdvantagesCardText>{text}</ForCompaniesAdvantagesCardText>
    </ForCompaniesAdvantagesCardContainer>
  );
};

export default ForCompaniesAdvantagesCard;

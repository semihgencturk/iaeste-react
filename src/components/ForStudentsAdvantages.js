import React from "react";
import styled from "styled-components";
import ForCompaniesAdvantagesCard from "../ui/ForCompaniesAdvantagesCard";
import ScrollButton from "../ui/ScrollButton";

const ForCompaniesAdvantagesContainer = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: #1a1c20;
  padding: 25px;

  @media (max-width: 768px) {
    min-height: 92vh;
    height: auto;
    gap: 5vh;
  }
`;

const ForCompaniesAdvantagesHeader = styled.h2`
  font-size: 50px;
  margin: 0;

  span {
    color: #f9813a;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const ForCompaniesAdvantagesCardBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  gap: 5%;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const ForStudentsAdvantages = () => {
  return (
    <ForCompaniesAdvantagesContainer>
      <ForCompaniesAdvantagesHeader>
        <span>Öğrenciler</span> İçin IAESTE
      </ForCompaniesAdvantagesHeader>
      <ForCompaniesAdvantagesCardBox>
        <ForCompaniesAdvantagesCard logo="fa-solid fa-coins" text="Lorem" />
        <ForCompaniesAdvantagesCard logo="fa-solid fa-language" text="Lorem" />
        <ForCompaniesAdvantagesCard logo="fa-solid fa-book" text="Lorem" />
        <ForCompaniesAdvantagesCard logo="fa-solid fa-globe" text="Lorem" />
        <ForCompaniesAdvantagesCard
          logo="fa-solid fa-network-wired"
          text="Lorem"
        />
        <ForCompaniesAdvantagesCard
          logo="fa-solid fa-graduation-cap"
          text="Lorem"
        />
      </ForCompaniesAdvantagesCardBox>
      <ScrollButton text="Partnerlerimiz" />
    </ForCompaniesAdvantagesContainer>
  );
};

export default ForStudentsAdvantages;

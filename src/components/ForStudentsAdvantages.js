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
        <ForCompaniesAdvantagesCard
          logo="fa-solid fa-coins"
          text="IAESTE sayesinde kaliteli bir staj yapabilirsen."
        />
        <ForCompaniesAdvantagesCard
          logo="fa-solid fa-globe"
          text="Hayalini kurduğun ülkeleri ziyaret edebilir. Oradaki yaşamı tecrübe edebilirsin."
        />
        <ForCompaniesAdvantagesCard
          logo="fa-solid fa-user-group"
          text="Farklı kültürler tanıyıp, uluslararası arkadaşlıklar edinebilirsin."
        />
        <ForCompaniesAdvantagesCard
          logo="fa-solid fa-book"
          text="CV hazırlama, motivasyon mektubu yazma gibi konularda destek alabilirsin."
        />
        <ForCompaniesAdvantagesCard
          logo="fa-solid fa-network-wired"
          text="Türkiye'deki şirketlerle görüşerek hem bağlantı ağını geliştirip hem de iletişim becerini güçlendirebilirsin."
        />
        <ForCompaniesAdvantagesCard
          logo="fa-solid fa-language"
          text="Hem speaking club'lar hem de uluslararsı etkinlikler ingilizceni geliştirebilirsin."
        />
      </ForCompaniesAdvantagesCardBox>
      <ScrollButton text="Partnerlerimiz" />
    </ForCompaniesAdvantagesContainer>
  );
};

export default ForStudentsAdvantages;

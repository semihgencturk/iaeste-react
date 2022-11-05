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
`;

const ForCompaniesAdvantagesHeader = styled.h2`
  font-size: 50px;
  margin: 0;

  span {
    color: #f9813a;
  }
`;

const ForCompaniesAdvantagesCardBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  gap: 5%;
`;

const ForCompaniesAdvantages = () => {
  return (
    <ForCompaniesAdvantagesContainer>
      <ForCompaniesAdvantagesHeader>
        <span>Şirketler</span> İçin IAESTE
      </ForCompaniesAdvantagesHeader>
      <ForCompaniesAdvantagesCardBox>
        <ForCompaniesAdvantagesCard
          logo="fa-solid fa-coins"
          text="IAESTE ile çalışmak bir kurum için ekonomik anlamda çok uygundur. Kurumların ihtiyaçlarını karşılayacak doğru insanı bulmasının en ucuz ve kolay yoludur."
        />
        <ForCompaniesAdvantagesCard
          logo="fa-solid fa-language"
          text="Yabancı bir stajyer, kuruma uluslararası bir atmosfer getirir. Dil kurslarına para vermek yerine çalışanlar stajyerler ile konuşarak dil yeteneklerini çalışırken geliştirme şansı verir."
        />
        <ForCompaniesAdvantagesCard
          logo="fa-solid fa-book"
          text="IAESTE stajyerleri motivasyonu yüksek ve gerçek anlamda çalıştıkları kuruma katkıda bulunmayı hedefleyen öğrenciler olarak stajları boyunca gerçekten anlamlı işler yapmak istemektedirler."
        />
        <ForCompaniesAdvantagesCard
          logo="fa-solid fa-globe"
          text="IAESTE uluslararası çaptaki kurumlara daha sonra dış temsilciliklerinde görev verebileceği potansiyel çalışanlarla tanışıp onları eğitme ve deneme şansı sunar."
        />
        <ForCompaniesAdvantagesCard
          logo="fa-solid fa-network-wired"
          text="IAESTE kurumlara gelecekteki çalışanlarını seçebilecekleri uluslararası bir “network” şansı sunar"
        />
        <ForCompaniesAdvantagesCard
          logo="fa-solid fa-graduation-cap"
          text="Uluslarası bir çalışanı işe almadan önce deneme şansı sunar."
        />
      </ForCompaniesAdvantagesCardBox>
      <ScrollButton text="Partnerlerimiz" />
    </ForCompaniesAdvantagesContainer>
  );
};

export default ForCompaniesAdvantages;

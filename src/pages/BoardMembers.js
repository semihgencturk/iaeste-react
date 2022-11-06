import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import BoardMemberCard from "../components/BoardMemberCard";
import AcelyaPhoto from "../assets/BoardMembersPhotos/AcelyaPhoto.jpg";
import AliEnsarPhoto from "../assets/BoardMembersPhotos/AliEnsarPhoto.jpg";
import AliManasPhoto from "../assets/BoardMembersPhotos/AliManasPhoto.jpg";
import BerfinPhoto from "../assets/BoardMembersPhotos/BerfinPhoto.jpg";
import CerenayPhoto from "../assets/BoardMembersPhotos/CerenayPhoto.png";
import ElifDogaPhoto from "../assets/BoardMembersPhotos/ElifDogaPhoto.jpg";
import ElifPhoto from "../assets/BoardMembersPhotos/ElifPhoto.jpeg";
import ElvinPhoto from "../assets/BoardMembersPhotos/ElvinPhoto.jpg";
import EzgiPhoto from "../assets/BoardMembersPhotos/EzgiPhoto.jpeg";
import GunelPhoto from "../assets/BoardMembersPhotos/GunelPhoto.jpg";
import IremPhoto from "../assets/BoardMembersPhotos/IremPhoto.jpg";
import MelsuPhoto from "../assets/BoardMembersPhotos/MelsuPhoto.jpeg";
import SemihPhoto from "../assets/BoardMembersPhotos/SemihPhoto.jpg";
import SuraPhoto from "../assets/BoardMembersPhotos/SuraPhoto.jpeg";
import YagmurPhoto from "../assets/BoardMembersPhotos/YagmurPhoto.jpg";
import BaharPhoto from "../assets/BoardMembersPhotos/BaharPhoto.jpg";
import SelenGorkemPhoto from "../assets/BoardMembersPhotos/SelenGorkemPhoto.jpg";
import BilgesuPhoto from "../assets/BoardMembersPhotos/BilgesuPhoto.jpg";

// import PageTitle from "../ui/PageTitle";

const BoardMembersContainer = styled.div`
  width: 100%;
  min-height: 92vh;
  background: #1a1c20;

  @media (max-width: 768px) {
    height: auto;
    padding-top: 5vh;
    display: flex;
    flex-direction: column;
    gap: 2vh;
  }
`;

// const BoardMemberTitle = styled.div`
//   font-size: 24px;
//   display: flex;
//   justify-content: center;
//   color: red;
//   margin-bottom: 25px;
// `;

const BoardMemberCards = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 2vh;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BoardMembers = () => {
  return (
    <>
      <Navbar />
      <BoardMembersContainer>
        {/* <PageTitle title="YÖNETİM KURULUMUZ" /> */}
        <BoardMemberCards>
          <BoardMemberCard
            title="Başkan"
            name="ELİF"
            photo={ElifPhoto}
            link="https://www.linkedin.com/in/elifkahraman-"
          />
        </BoardMemberCards>
        <BoardMemberCards>
          <BoardMemberCard
            title="Başkan Yardımcısı"
            name="MELSU"
            photo={MelsuPhoto}
            link="https://www.linkedin.com/in/melsu-akgun"
          />
          <BoardMemberCard
            title="Başkan Yardımcısı"
            name="ŞURA"
            photo={SuraPhoto}
            link="https://www.linkedin.com/in/betul-sura-akalin-/"
          />
        </BoardMemberCards>
        <BoardMemberCards>
          <BoardMemberCard
            title="Sekreter"
            name="ENSAR"
            photo={AliEnsarPhoto}
            link="https://www.linkedin.com/in/ali-ensar-gungor"
          />
          <BoardMemberCard
            title="Kurumsal Koordinatör"
            name="ELVİN"
            photo={ElvinPhoto}
            link="https://www.linkedin.com/in/elvin-dokuyucu/"
          />
          <BoardMemberCard
            title="Kurumsal Koordinatör"
            name="CERENAY"
            photo={CerenayPhoto}
            link="https://www.linkedin.com/in/cerenayaslan"
          />
          <BoardMemberCard
            title="Kurumsal Koordinatör"
            name="İREM"
            photo={IremPhoto}
          />
        </BoardMemberCards>
        <BoardMemberCards>
          <BoardMemberCard
            title="Etkinlik Koordinatörü"
            name="EZGİ"
            photo={EzgiPhoto}
          />
          <BoardMemberCard
            title="Etkinlik Koordinatörü"
            name="YAĞMUR"
            photo={YagmurPhoto}
          />
          <BoardMemberCard
            title="Sosyal Medya Koordinatörü"
            name="BERFİN"
            photo={BerfinPhoto}
            link="https://www.linkedin.com/in/berfin-dokuyucu/"
          />
          <BoardMemberCard
            title="Sosyal Medya Koordinatörü"
            name="AÇELYA"
            photo={AcelyaPhoto}
          />
        </BoardMemberCards>
        <BoardMemberCards>
          <BoardMemberCard
            title="IT Koordinatörü"
            name="GUNEL"
            photo={GunelPhoto}
            link="https://www.linkedin.com/in/gunelsultanova/"
          />
          <BoardMemberCard
            title="IT Koordinatörü"
            name="SEMİH"
            photo={SemihPhoto}
            link="https://www.linkedin.com/in/semihgencturk/"
          />
          <BoardMemberCard
            title="Twinning Koordinatörü"
            name="MANAS"
            photo={AliManasPhoto}
            link="https://www.linkedin.com/in/ali-manas-demir-"
          />
          <BoardMemberCard title="Joker" name="ELİF" photo={ElifDogaPhoto} />
        </BoardMemberCards>
        {/* <PageTitle title="DENETİM KURULUMUZ" /> */}
        <BoardMemberCards>
          <BoardMemberCard
            title="Denetim Kurulu Başkanı"
            name="BAHAR"
            photo={BaharPhoto}
            link="https://www.linkedin.com/in/bahar-bosut/"
          />
          <BoardMemberCard
            title="Denetim Kurulu Üyesi"
            name="BİLGESU"
            photo={BilgesuPhoto}
            link="https://www.linkedin.com/in/bilgesu-kaymak-7a6bb01b9"
          />
          <BoardMemberCard
            title="Denetim Kurulu Üyesi"
            name="SELEN"
            photo={SelenGorkemPhoto}
          />
        </BoardMemberCards>
      </BoardMembersContainer>
    </>
  );
};

export default BoardMembers;

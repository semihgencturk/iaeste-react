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
        {/* <PageTitle title="Y??NET??M KURULUMUZ" /> */}
        <BoardMemberCards>
          <BoardMemberCard
            title="Ba??kan"
            name="EL??F"
            photo={ElifPhoto}
            link="https://www.linkedin.com/in/elifkahraman-"
          />
        </BoardMemberCards>
        <BoardMemberCards>
          <BoardMemberCard
            title="Ba??kan Yard??mc??s??"
            name="MELSU"
            photo={MelsuPhoto}
            link="https://www.linkedin.com/in/melsu-akgun"
          />
          <BoardMemberCard
            title="Ba??kan Yard??mc??s??"
            name="??URA"
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
            title="Kurumsal Koordinat??r"
            name="ELV??N"
            photo={ElvinPhoto}
            link="https://www.linkedin.com/in/elvin-dokuyucu/"
          />
          <BoardMemberCard
            title="Kurumsal Koordinat??r"
            name="CERENAY"
            photo={CerenayPhoto}
            link="https://www.linkedin.com/in/cerenayaslan"
          />
          <BoardMemberCard
            title="Kurumsal Koordinat??r"
            name="??REM"
            photo={IremPhoto}
          />
        </BoardMemberCards>
        <BoardMemberCards>
          <BoardMemberCard
            title="Etkinlik Koordinat??r??"
            name="EZG??"
            photo={EzgiPhoto}
          />
          <BoardMemberCard
            title="Etkinlik Koordinat??r??"
            name="YA??MUR"
            photo={YagmurPhoto}
          />
          <BoardMemberCard
            title="Sosyal Medya Koordinat??r??"
            name="BERF??N"
            photo={BerfinPhoto}
            link="https://www.linkedin.com/in/berfin-dokuyucu/"
          />
          <BoardMemberCard
            title="Sosyal Medya Koordinat??r??"
            name="A??ELYA"
            photo={AcelyaPhoto}
          />
        </BoardMemberCards>
        <BoardMemberCards>
          <BoardMemberCard
            title="IT Koordinat??r??"
            name="GUNEL"
            photo={GunelPhoto}
            link="https://www.linkedin.com/in/gunelsultanova/"
          />
          <BoardMemberCard
            title="IT Koordinat??r??"
            name="SEM??H"
            photo={SemihPhoto}
            link="https://www.linkedin.com/in/semihgencturk/"
          />
          <BoardMemberCard
            title="Twinning Koordinat??r??"
            name="MANAS"
            photo={AliManasPhoto}
            link="https://www.linkedin.com/in/ali-manas-demir-"
          />
          <BoardMemberCard title="Joker" name="EL??F" photo={ElifDogaPhoto} />
        </BoardMemberCards>
        {/* <PageTitle title="DENET??M KURULUMUZ" /> */}
        <BoardMemberCards>
          <BoardMemberCard
            title="Denetim Kurulu Ba??kan??"
            name="BAHAR"
            photo={BaharPhoto}
            link="https://www.linkedin.com/in/bahar-bosut/"
          />
          <BoardMemberCard
            title="Denetim Kurulu ??yesi"
            name="B??LGESU"
            photo={BilgesuPhoto}
            link="https://www.linkedin.com/in/bilgesu-kaymak-7a6bb01b9"
          />
          <BoardMemberCard
            title="Denetim Kurulu ??yesi"
            name="SELEN"
            photo={SelenGorkemPhoto}
          />
        </BoardMemberCards>
      </BoardMembersContainer>
    </>
  );
};

export default BoardMembers;

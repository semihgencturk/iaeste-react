import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import BoardMemberCard from "../components/BoardMemberCard";
import SemihGencturk from "../assets/BoardMembersPhotos/SemihGencturk.jpg";
// import PageTitle from "../ui/PageTitle";

const BoardMembersContainer = styled.div`
  width: 100%;
  height: 92vh;
  background: #1a1c20;

  @media (min-width: 500px) {
    height: auto;
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
`;

const BoardMembers = () => {
  return (
    <>
      <Navbar />
      <BoardMembersContainer>
        {/* <PageTitle title="YÖNETİM KURULUMUZ" /> */}
        <BoardMemberCards>
          <BoardMemberCard title="Başkan" name="ELİF" photo={SemihGencturk} />
        </BoardMemberCards>
        <BoardMemberCards>
          <BoardMemberCard
            title="Başkan Yardımcısı"
            name="MELSU"
            photo={SemihGencturk}
          />
          <BoardMemberCard
            title="Başkan Yardımcısı"
            name="ŞURA"
            photo={SemihGencturk}
          />
        </BoardMemberCards>
        <BoardMemberCards>
          <BoardMemberCard title="Sekreter" name="ALİ" photo={SemihGencturk} />
          <BoardMemberCard
            title="Kurumsal Koordinatör"
            name="ELVİN"
            photo={SemihGencturk}
          />
          <BoardMemberCard
            title="Kurumsal Koordinatör"
            name="CERENAY"
            photo={SemihGencturk}
          />
          <BoardMemberCard
            title="Kurumsal Koordinatör"
            name="İREM"
            photo={SemihGencturk}
          />
        </BoardMemberCards>
        <BoardMemberCards>
          <BoardMemberCard
            title="Etkinlik Koordinatörü"
            name="EZGİ"
            photo={SemihGencturk}
          />
          <BoardMemberCard
            title="Etkinlik Koordinatörü"
            name="YAĞMUR"
            photo={SemihGencturk}
          />
          <BoardMemberCard
            title="Sosyal Medya Koordinatörü"
            name="BERFİN"
            photo={SemihGencturk}
          />
          <BoardMemberCard
            title="Sosyal Medya Koordinatörü"
            name="AÇELYA"
            photo={SemihGencturk}
          />
        </BoardMemberCards>
        <BoardMemberCards>
          <BoardMemberCard
            title="IT Koordinatörü"
            name="GUNEL"
            photo={SemihGencturk}
          />
          <BoardMemberCard
            title="IT Koordinatörü"
            name="SEMİH"
            photo={SemihGencturk}
          />
          <BoardMemberCard
            title="Twinning Koordinatörü"
            name="ALİ"
            photo={SemihGencturk}
          />
          <BoardMemberCard title="Joker" name="ELİF" photo={SemihGencturk} />
        </BoardMemberCards>
        {/* <PageTitle title="DENETİM KURULUMUZ" /> */}
        <BoardMemberCards>
          <BoardMemberCard
            title="Denetim Kurulu Başkanı"
            name="BAHAR"
            photo={SemihGencturk}
          />
          <BoardMemberCard
            title="Denetim Kurulu Üyesi"
            name="BİLGESU"
            photo={SemihGencturk}
          />
          <BoardMemberCard
            title="Denetim Kurulu Üyesi"
            name="SELEN"
            photo={SemihGencturk}
          />
        </BoardMemberCards>
      </BoardMembersContainer>
    </>
  );
};

export default BoardMembers;

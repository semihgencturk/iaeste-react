import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { announcementsContent } from "../contents/contents";
import Announcement from "../components/Announcement";
// import PageTitle from "../ui/PageTitle";

const AnnouncementsContainer = styled.div`
  width: 100%;
  min-height: 87vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;
  padding-top: 5vh;
  background: #1a1c20;
`;

const Announcements = () => {
  return (
    <>
      <Navbar />
      {/* <PageTitle title="DUYURULAR" /> */}
      <AnnouncementsContainer>
        {announcementsContent.map((item, index) => (
          <Announcement
            key={index}
            title={item.title}
            text={item.text}
            bannerSrc={item.bannerSrc}
            bannerAlt={item.bannerAlt}
          />
        ))}
      </AnnouncementsContainer>
    </>
  );
};

export default Announcements;

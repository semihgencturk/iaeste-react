import React from "react";
import styled from "styled-components";

const AnnouncementContainer = styled.div`
  width: 75%;
  min-height: 25vh;
  height: auto;
  display: flex;
  justify-content: space-between;
  gap: 2vh;
  background: ${(props) => props.boxColor && props.boxColor};
  border-radius: 25px;

  @media (max-width: 768px) {
    min-height: 15vh;
    padding: 2vh;
  }
`;

const AnnouncementBanner = styled.img`
  width: 25%;
  height: auto;
  border-radius: 25px 0 0 25px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const AnnouncementContent = styled.div`
  width: 75%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

const AnnouncementTitle = styled.div`
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const AnnouncementText = styled.div`
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Announcement = ({ title, text, bannerSrc, bannerAlt, boxColor }) => {
  return (
    <AnnouncementContainer boxColor={boxColor}>
      <AnnouncementBanner src={bannerSrc} alt={bannerAlt} />
      <AnnouncementContent>
        <AnnouncementTitle>{title}</AnnouncementTitle>
        <AnnouncementText>{text}</AnnouncementText>
      </AnnouncementContent>
    </AnnouncementContainer>
  );
};

export default Announcement;

import React from "react";
import styled from "styled-components";

const EventCardContainer = styled.div`
  width: 80%;
  height: 30vh;
  border: solid 1px white;
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2vh;
  padding-left: 2%;
  padding-right: 2%;

  @media (max-width: 768px) {
    width: 80%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: auto;
    padding-bottom: 2vh;
    padding-top: 2vh;
  }
`;

const EventCardTitle = styled.div`
  font-size: 24px;
  transform: rotate(-25deg);
  width: 15%;

  @media (max-width: 768px) {
    transform: rotate(0deg);
    width: 100%;
    font-size: 18px;
  }
`;

const EventPhotos = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  gap: 2vh;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const EventPhoto = styled.img`
  width: 25%;
  height: 20vh;
  object-fit: cover;
`;

const EventCard = ({ event }) => {
  return (
    <>
      <EventCardContainer>
        <EventCardTitle>{event.title}</EventCardTitle>
        <EventPhotos>
          {event.photos.map((item, index) => (
            <EventPhoto key={index} src={item.src} alt={item.alt} />
          ))}
        </EventPhotos>
      </EventCardContainer>
    </>
  );
};

export default EventCard;

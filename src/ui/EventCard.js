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
`;

const EventCardTitle = styled.div`
  font-size: 24px;
  transform: rotate(-25deg);
  width: 15%;
`;

const EventPhotos = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  gap: 2vh;
`;

const EventPhoto = styled.img`
  width: 25%;
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

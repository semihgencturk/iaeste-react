import React from "react";
import styled from "styled-components";
import EventCard from "../ui/EventCard";
import { eventsContent } from "../contents/contents";
import ScrollButton from "../ui/ScrollButton";

const EventsContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  background: #1a1c20;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5vh;
  padding-bottom: 5vh;
  gap: 5vh;
`;

const EventsHeader = styled.div`
  font-size: 50px;

  span {
    color: #f9813a;
  }
`;

const Events = () => {
  return (
    <EventsContainer>
      <EventsHeader>
        <span>Etkinlikler</span>
      </EventsHeader>
      {eventsContent.map((item, index) => (
        <EventCard key={index} event={item} />
      ))}
      <ScrollButton text="Bize Ulaşın" />
    </EventsContainer>
  );
};

export default Events;

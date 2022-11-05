import React from "react";
import styled from "styled-components";
import BeIaesteInternCard from "../ui/BeIaesteInternCard";
import { beIaesteInternContent } from "../contents/contents";
import ScrollButton from "../ui/ScrollButton";

const BeIaesteInternContainer = styled.div`
  width: 100%;
  min-height: 95vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh;
  padding-top: 5vh;
  background: #1a1c20;
`;

const BeIaesteInternHeader = styled.div`
  font-size: 50px;

  span {
    color: #f9813a;
  }
`;

const BeIaesteInternContent = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  gap: 5%;
`;

const BeIaesteIntern = () => {
  return (
    <BeIaesteInternContainer>
      <BeIaesteInternHeader>
        <span>IAESTE Stajyeri</span> Nasıl Olunur?
      </BeIaesteInternHeader>
      <BeIaesteInternContent>
        {beIaesteInternContent.map((item, index) => (
          <BeIaesteInternCard key={index} logo={item.logo} text={item.text} />
        ))}
      </BeIaesteInternContent>
      <ScrollButton text="Etkinlikler" />
    </BeIaesteInternContainer>
  );
};

export default BeIaesteIntern;

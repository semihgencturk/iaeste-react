import React from "react";
import styled from "styled-components";
import ApplicationStepCard from "../ui/ApplicationStepCard";
import { applicationStepsContent } from "../contents/contents";
import ScrollButton from "../ui/ScrollButton";

const ApplicationProcessContainer = styled.div`
  width: 100%;
  height: 95vh;
  background: #1a1c20;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh;
  padding-top: 5vh;

  @media (max-width: 768px) {
    height: auto;
    padding: 5vh 5% 5vh 5%;
    width: 90%;
  }
`;

const ApplicationProcessHeader = styled.div`
  font-size: 50px;

  span {
    color: #f9813a;
  }

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const ApplicationSteps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;
`;

const ApplicationProcess = () => {
  return (
    <ApplicationProcessContainer>
      <ApplicationProcessHeader>
        <span>Süreç</span> Nasıl İşliyor?
      </ApplicationProcessHeader>
      <ApplicationSteps>
        {applicationStepsContent.map((item, index) => (
          <ApplicationStepCard
            key={index}
            title={item.title}
            explanation={item.explanation}
            boxColor={index % 2 == 1 ? "#f9813a" : "#753188"}
            textAlign={index % 2 == 0 ? "left" : "right"}
          />
        ))}
      </ApplicationSteps>
      <ScrollButton text="Koşullar" />
    </ApplicationProcessContainer>
  );
};

export default ApplicationProcess;

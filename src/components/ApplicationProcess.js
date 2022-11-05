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

  @media (max-width: 500px) {
    height: auto;
  }
`;

const ApplicationProcessHeader = styled.div`
  font-size: 50px;

  span {
    color: #f9813a;
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

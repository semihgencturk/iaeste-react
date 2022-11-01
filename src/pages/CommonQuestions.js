import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { commonQuestionsContent } from "../contents/contents";
import QuestionContainer from "../components/QuestionContainer";

const CommonQuestionsContainer = styled.div`
  width: 100%;
  min-height: 87vh;
  height: auto;
  padding-top: 5vh;
  background: #1a1c20;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;
`;

const CommonQuestions = () => {
  return (
    <>
      <Navbar />
      <CommonQuestionsContainer>
        {commonQuestionsContent.map((item, index) => (
          <QuestionContainer
            key={index}
            question={item.question}
            answer={item.answer}
            boxColor={index % 2 == 0 ? "#f9813a" : "#753188"}
            textAlign={index % 2 == 0 ? "left" : "right"}
          />
        ))}
      </CommonQuestionsContainer>
    </>
  );
};

export default CommonQuestions;

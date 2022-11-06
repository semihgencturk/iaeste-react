import React from "react";
import { useState } from "react";
import styled from "styled-components";

const QuestionContainerBox = styled.div`
  width: 75%;
  height: auto;
  background: ${(props) => props.boxColor && props.boxColor};
  display: flex;
  flex-direction: column;
  gap: 3vh;
  border-radius: 25px;
  padding: 2vh;
  cursor: pointer;
  float: ${(props) => props.textAlign && props.textAlign};
`;

const QuestionBox = styled.div`
  font-size: 18px;

  span {
    margin-right: 2vh;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const QuestionAnswer = styled.div`
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const QuestionContainer = ({ question, answer, boxColor, textAlign }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <QuestionContainerBox
      boxColor={boxColor}
      textAlign={textAlign}
      onClick={handleShowAnswer}
    >
      <QuestionBox>
        {!showAnswer ? (
          <span className="fa-solid fa-arrow-down"></span>
        ) : (
          <span className="fa-solid fa-arrow-up"></span>
        )}
        {question}
      </QuestionBox>
      {showAnswer ? <QuestionAnswer>{answer}</QuestionAnswer> : null}
    </QuestionContainerBox>
  );
};

export default QuestionContainer;

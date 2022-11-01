import React from "react";
import styled from "styled-components";

const BoardMemberCardContainer = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
`;

const BoardMemberCardPart1 = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
`;

const BoardMemberName = styled.div`
  writing-mode: vertical-lr;
  text-orientation: upright;
  background: #f9813a;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px 0 0 0;
  width: 35px;
  font-weight: 900;
`;

const BoardMemberPhoto = styled.img`
  border-radius: 0 25px 0 0;
  width: 200px;
  height: 200px;
`;

const BoardMemberCardPart2 = styled.div`
  width: 100%;
  height: 100px;
  display: flex;

  a {
    color: white;
    background: #205375;
    width: 35px;
    height: 35px;
    border-radius: 0 0 0 25px;
  }
`;

const BoardMemberTitle = styled.div`
  width: 200px;
  height: 35px;
  border-radius: 0 0 100px 0;
  background: #f9813a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkedinIcon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoardMemberCard = ({ title, name, photo }) => {
  return (
    <BoardMemberCardContainer>
      <BoardMemberCardPart1>
        <BoardMemberName>{name}</BoardMemberName>
        <BoardMemberPhoto src={photo} alt="Yonetim-Kurulu-Uyesi-Resim" />
      </BoardMemberCardPart1>
      <BoardMemberCardPart2>
        <a href="" target="_blank" rel="noreferrer">
          <LinkedinIcon
            className="fa-brands fa-linkedin"
            aria-hidden="true"
          ></LinkedinIcon>
        </a>
        <BoardMemberTitle>{title}</BoardMemberTitle>
      </BoardMemberCardPart2>
    </BoardMemberCardContainer>
  );
};

export default BoardMemberCard;

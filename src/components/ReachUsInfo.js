import React from "react";
import styled from "styled-components";
import SocialMediaIcons from "../components/SocialMediaIcons";
import ExternalButton from "../ui/ExternalButton";
import InternalButton from "../ui/InternalButton";

const ReachUsContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #1a1c20;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const ReachUsContainerLine = styled.div`
  width: 75%;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 5%;
`;

const Mail = styled.div`
  font-size: 24px;
  color: white;
`;

const ReachUsHeader = styled.div`
  font-size: 50px;
  color: #f9813a;
`;

const ReachUsInfo = ({ forCompaniesPage }) => {
  return (
    <ReachUsContainer>
      {forCompaniesPage ? <ReachUsHeader>Bize Ulaşın</ReachUsHeader> : null}
      <SocialMediaIcons />
      <Mail>iaeste.yildiztu@gmail.com</Mail>
      <InternalButton
        linkTo="/Yonetim-Kurulumuz"
        buttonTitle="Yönetim Kurulumuz'a Ulaşın"
      />
      <ReachUsContainerLine>
        <ExternalButton href="" buttonTitle="Aramıza Katıl" />
        <ExternalButton href="" buttonTitle="Stajyer Talep Et" />
      </ReachUsContainerLine>
    </ReachUsContainer>
  );
};

export default ReachUsInfo;

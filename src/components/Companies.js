import React from "react";
import styled from "styled-components";
import YtuLogo from "../assets/YtuLogo.png";
import Logo from "../ui/Logo";
import ScrollButton from "../ui/ScrollButton";

const CompaniesContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: #1a1c20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    min-height: 95vh;
    height: auto;
    gap: 5vh;
    justify-content: space-between;
    padding-bottom: 5vh;
  }
`;

const CompaniesRow = styled.div`
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
`;

const CompaniesHeader = styled.div`
  font-size: 50px;
  color: #f9813a;
`;

const Companies = () => {
  return (
    <CompaniesContainer>
      <CompaniesHeader>Partnerlerimiz</CompaniesHeader>
      <CompaniesRow>
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
      </CompaniesRow>
      <CompaniesRow>
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
      </CompaniesRow>
      <CompaniesRow>
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
        <Logo src={YtuLogo} alt="IAESTE-logo" width={50} />
      </CompaniesRow>
      <ScrollButton text="Bize Ulaşın" />
    </CompaniesContainer>
  );
};

export default Companies;

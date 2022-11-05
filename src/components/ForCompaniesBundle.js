import React from "react";
import styled from "styled-components";
import IaesteLogo from "../assets/IaesteLogo.png";
import Logo from "../ui/Logo";
import ScrollButton from "../ui/ScrollButton";

const ForCompaniesBundleContainer = styled.div`
  background: #1a1c20;
  width: 90%;
  height: 87vh;
  padding: 5vh 5% 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh;
`;

const ForCompaniesBundleText = styled.div`
  font-size: 24px;
  font-style: italic;
  border: solid 1px grey;
  border-radius: 25px;
  padding: 2vh;

  span {
    color: #f9813a;
  }
`;
const ForCompaniesBundleTitle = styled.div`
  font-size: 80px;
  color: #f9813a;
`;

const ForCompaniesBundleSubTitle = styled.div`
  font-size: 40px;
`;

const ForCompaniesBundle = () => {
  return (
    <>
      <ForCompaniesBundleContainer>
        <Logo src={IaesteLogo} alt="IAESTE-logo" width={150} />
        <ForCompaniesBundleTitle>IAESTE YTU</ForCompaniesBundleTitle>
        <ForCompaniesBundleSubTitle>
          ULUSLARARASI STAJ DEĞİŞİM KULÜBÜ
        </ForCompaniesBundleSubTitle>
        <ForCompaniesBundleText>
          ``Bu sene <span>Stajyerini IAESTE </span> ile bul``
        </ForCompaniesBundleText>
        <ScrollButton text="IAESTE Nedir?" />
      </ForCompaniesBundleContainer>
    </>
  );
};

export default ForCompaniesBundle;

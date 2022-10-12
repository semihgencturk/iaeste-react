import React from "react";
import styled from "styled-components";
import RotatableImage from "../ui/RotatableImage";
// import HomeBundlePhoto from "../assets/HomeBundlePhoto.jpg";
import HomeBundlePhoto2 from "../assets/HomeBundlePhoto2.jpg";
import HomeBundlePhoto3 from "../assets/HomeBundlePhoto3.jpg";

const HomeBundleContainer = styled.div`
  width: 100%;
  height 92vh;
  background: #1A1C20;
  display: flex;
`;

const HomeBundleContents = styled.div`
  width: 60%;
  padding-left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5vh;
`;

const HomeBundleTitle = styled.div`
  font-size: 80px;
  color: #f9813a;
`;

const HomeBundleSubTitle = styled.div`
  font-size: 40px;
`;

const HomeBundleButtons = styled.div`
  display: flex;
  gap: 5%;
`;

const InternalButton = styled.button`
  width: 30%;
  height: 10vh;
  font-size: 20px;
  font-weight: 900;
  border-radius: 25px;
  color: #be3030;
  box-shadow: 10px 10px 5px #aaaaaa;

  :hover {
    box-shadow: none;
    cursor: pointer;
  }
`;
const HomeBundleImages = styled.div`
  width: 40%;
  padding-right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5%;
`;

const HomeBundleImagesRow = styled.div`
  display: flex;
  gap: 5%;
`;

const HomeBundle = () => {
  return (
    <HomeBundleContainer>
      <HomeBundleContents>
        <HomeBundleTitle>IAESTE YTU</HomeBundleTitle>
        <HomeBundleSubTitle>
          ULUSLARARASI STAJ DEĞİŞİM KULÜBÜ
        </HomeBundleSubTitle>
        <HomeBundleButtons>
          <InternalButton>ŞİRKETLER İÇİN</InternalButton>
          <InternalButton>ÖĞRENCİLER İÇİN</InternalButton>
        </HomeBundleButtons>
      </HomeBundleContents>
      <HomeBundleImages>
        <HomeBundleImagesRow>
          <RotatableImage
            rotate={false}
            alt="https://www.freepik.com/free-vector/world-continent-map-location-graphic-illustration_2611267.htm#&position=6&from_view=user"
            width="50"
            src={HomeBundlePhoto3}
          />
          <RotatableImage
            rotate={false}
            alt="test"
            width="50"
            src={HomeBundlePhoto2}
          />
        </HomeBundleImagesRow>
        <HomeBundleImagesRow>
          <RotatableImage
            rotate={false}
            alt="https://www.freepik.com/free-vector/world-continent-map-location-graphic-illustration_2611267.htm#&position=6&from_view=user"
            width="50"
            src={HomeBundlePhoto3}
          />
          <RotatableImage
            rotate={false}
            alt="test"
            width="50"
            src={HomeBundlePhoto2}
          />
        </HomeBundleImagesRow>
      </HomeBundleImages>
    </HomeBundleContainer>
  );
};

export default HomeBundle;

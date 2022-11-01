import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import RotatableImage from "../ui/RotatableImage";
import HomeBundlePhoto2 from "../assets/HomeBundlePhoto2.jpg";
import HomeBundlePhoto3 from "../assets/HomeBundlePhoto3.jpg";

const AboutUsContainer = styled.div`
  width: 100%;
  height: 92vh;
  background: #1a1c20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5vh;

  @media (max-width: 500px) {
    height: auto;
  }
`;

const AboutUsIntro = styled.div`
  width: 500px;
  height: auto;
  background: #f9813a;
  border: solid 2px #f9813a;
  border-radius: 10px;
  padding: 2vh;

  span {
    font-size: 24px;
    color: #1a4d2e;
    font-weight: 900;
    display: flex;
    justify-content: center;
    text-decoration: underline;
  }

  @media (max-width: 500px) {
    width: 300px;
  }
`;

const AboutUsPart1 = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const AboutUsPart2 = styled.div`
  display: flex;
  gap: 5vh;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <AboutUsContainer>
        <AboutUsPart1>
          <RotatableImage
            rotate={false}
            alt="https://www.freepik.com/free-vector/world-continent-map-location-graphic-illustration_2611267.htm#&position=6&from_view=user"
            width="20"
            src={HomeBundlePhoto3}
          />
          <AboutUsIntro>
            <span> IAESTE NEDİR </span>
            <ul>
              <li>
                The International Association for the Exchange of Students for
                Technical Experience Milletlerarası Teknik Stajyer Öğrenci
                Mübadelesi Birliği 1948 yılında Londra`da kuruldu.
              </li>
              <li>
                Su anda merkezi Lüksemburg`da olan, kar amacı gütmeyen bağımsız
                uluslararası bir organizasyondur.
              </li>
              <li>
                80`den fazla ülkenin katılımıyla gerçeklesen bu organizasyon
                sayesinde her sene 4000`den fazla ögrenci yurt dısında staj
                yapma fırsatı buluyor.
              </li>
            </ul>
          </AboutUsIntro>
          <RotatableImage
            rotate={false}
            alt="test"
            width="20"
            src={HomeBundlePhoto2}
          />
        </AboutUsPart1>
        <AboutUsPart2>
          <AboutUsIntro>
            <span> IAESTE TÜRKİYE</span>
            <ul>
              <li>
                IAESTE Türkiye; 1953 yılında ITÜ adına aday üye, 1995 yılında
                ise tam üye olmustur.
              </li>
              <li>IAESTE Türkiye`ye 62 üniversite üyedir. </li>
              <li>
                IAESTE ile bugüne kadar Türkiye`ye gelen ve Türkiye`den giden
                toplam ögrenci sayısı yaklasık 22.000`dir.
              </li>
            </ul>
          </AboutUsIntro>
          <AboutUsIntro>
            <span> IAESTE YILDIZ</span>
            <ul>
              <li>
                IAESTE faaliyetleri 1984 yılında Yıldız Teknik Üniversitesi`nde
                baslamıstır.
              </li>
              <li>
                Resmi olarak 9 Ekim 2002 tarihinde Uluslararası Staj Değisim
                Kulübü adını almıstır.
              </li>
            </ul>
          </AboutUsIntro>
        </AboutUsPart2>
      </AboutUsContainer>
    </>
  );
};

export default AboutUs;

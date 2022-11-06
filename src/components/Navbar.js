import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import YtuLogo from "../assets/YtuLogo.png";
import IaesteWhiteLogo from "../assets/IaesteWhiteLogo.png";
import NonCollapsableNavbarItem from "../ui/NonCollapsableNavbarItem";
import NavbarHamburger from "./NavbarHamburger";

const NavbarContainer = styled.div`
  background: #1a1c20;
  width: 90%;
  height: 8vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const NavbarLogo = styled.img`
  width: 40px;
  height: 40px;
`;

const Navbar = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  return (
    <>
      <NavbarContainer>
        {windowSize.innerWidth > 768 ? (
          <>
            <Link to="/">
              <NavbarLogo src={IaesteWhiteLogo} alt="iaeste-logo" />
            </Link>
            <NonCollapsableNavbarItem title="Hakkımızda" linkTo="/Hakkimizda" />
            <NonCollapsableNavbarItem
              title="Yönetim Kurulumuz"
              linkTo="/Yonetim-Kurulumuz"
            />
            <NonCollapsableNavbarItem title="Duyurular" linkTo="/Duyurular" />
            <NonCollapsableNavbarItem title="İletişim" linkTo="/Iletisim" />
            <NonCollapsableNavbarItem
              title="S.S.S"
              linkTo="/Sikca-Sorulan-Sorular"
            />
            <a href="https://yildiz.edu.tr/" target="_blank" rel="noreferrer">
              <NavbarLogo src={YtuLogo} alt="yildiz-teknik-universitesi-logo" />
            </a>
          </>
        ) : (
          <>
            <Link to="/">
              <NavbarLogo src={IaesteWhiteLogo} alt="iaeste-logo" />
            </Link>
            <NavbarHamburger />
          </>
        )}
      </NavbarContainer>
    </>
  );
};

export default Navbar;

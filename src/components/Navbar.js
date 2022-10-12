import React from "react";
import styled from "styled-components";
import test from "../assets/test.png";
import NonCollapsableNavbarItem from "../ui/NonCollapsableNavbarItem";

const NavbarContainer = styled.div`
  background: #1a1c20;
  width: 90%;
  height: 8vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
`;

const NavbarLogo = styled.img`
  width: 40px;
  height: 40px;
`;

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <NavbarLogo src={test} alt="ss" />
        <NonCollapsableNavbarItem title="Hakkımızda" linkTo="" />
        <NonCollapsableNavbarItem title="Yönetim Kurulumuz" linkTo="" />
        <NonCollapsableNavbarItem title="Duyurular" linkTo="" />
        <NonCollapsableNavbarItem title="Başvuru" linkTo="" />
        <NonCollapsableNavbarItem title="İletişim" linkTo="" />
        <NonCollapsableNavbarItem title="S.S.S" linkTo="" />
        <NavbarLogo src={test} alt="ss" />
      </NavbarContainer>
    </>
  );
};

export default Navbar;

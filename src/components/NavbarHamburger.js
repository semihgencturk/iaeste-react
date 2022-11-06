import React from "react";
import { useState } from "react";
import styled from "styled-components";
import HamburgerItem from "../ui/HamburgerItem";

const NavbarHamburgerContainer = styled.div`
  width: 200px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  position: absolute;
  top: 1vh;
  right: 15px;
`;

const NavbarHamburgerButton = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 6px 22px;
  color: white;
  border: none;
  border-radius: 30px;
  background: transparent;
  text-color: white;
  font-family: Arial Black;
  font-size: 16px;
  cursor: pointer;
`;

const NavbarHamburgerIcon = styled.div`
  color: white;
`;

const NavbarHamburger = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <NavbarHamburgerContainer>
      <NavbarHamburgerButton onClick={() => setIsExpanded(!isExpanded)}>
        <NavbarHamburgerIcon
          className="fa-solid fa-bars"
          aria-hidden="true"
        ></NavbarHamburgerIcon>
      </NavbarHamburgerButton>
      {isExpanded ? (
        <>
          <HamburgerItem LinkTo="/" title="Anasayfa " />
          <HamburgerItem LinkTo="/Hakkimizda" title="Hakkımızda " />
          <HamburgerItem
            LinkTo="/Yonetim-Kurulumuz"
            title="Yönetim Kurulumuz"
          />
          <HamburgerItem LinkTo="/Duyurular" title="Duyurular" />
          <HamburgerItem LinkTo="/Iletisim" title="İletişim" />
          <HamburgerItem LinkTo="/Sikca-Sorulan-Sorular" title="S.S.S." />
          <HamburgerItem
            LinkTo="/Sirketler-Icin-Iaeste"
            title="Stajyer Talep Et"
          />
          <HamburgerItem
            LinkTo="/Ogrenciler-Icin-Iaeste"
            title="Aramıza Katıl"
          />
        </>
      ) : null}
    </NavbarHamburgerContainer>
  );
};

export default NavbarHamburger;

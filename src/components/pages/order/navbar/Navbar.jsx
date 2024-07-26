import React, { useState } from 'react'
import Logo from '../../../reusable-ui/Logo'
import NavbarRightSide from './NavbarRightSide'
import styled from 'styled-components';
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  //state
  const [isOpen, setIsOpen] = useState(false);
  //comportement
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  //affichage
  return (
    <NavbarStyled>
        <Logo className="logo-order-page"/>
        <MenuIcon onClick={toggleMenu}> {isOpen ? <FaTimes /> : <FaBars />}</MenuIcon>
        <NavbarRightSide isOpen={isOpen}/>
    </NavbarStyled>
  )
}
const NavbarStyled = styled.nav`
  /*border: 1px solid blue;*/
  background-color: #fff;
  height: 12vh;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-sizing: border-box;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  @media (max-width: 968px) {
    padding: 0 1;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 968px) {
    display: block;
  }
`;
